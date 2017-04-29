import React from 'react'
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  ListView,
  Button
} from 'react-native'

import { connect } from 'react-redux'
import {
  watchGuidelineAddedEvent,
  showGuideline,
  showList
} from './actions'

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText,
    mainContent,
    row,
    header
  } = styles
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return (
    <View style={container}>
      <View>
        <Text style={header}>
          Clinical Guidelines
        </Text>
      </View>
      <View style={mainContent}>
      {
        props.appData.isFetching && <Text>Loading</Text>
      }
      {
        props.appData.data.length && props.appData.showGuideline === false ? (
          <ListView
            style={mainContent}
            dataSource={ds.cloneWithRows(props.appData.data)}
            renderRow={(rowData) => (
              <TouchableHighlight onPress={() => props.showGuideline(rowData)}>
                <Text
                  style={row}
                >
                  {rowData.name}
                </Text>
              </TouchableHighlight>
            )}
          />
        ) : null
      }
      {
        props.appData.showGuideline ? (
          <View>
            <Button
              onPress={() => props.showList()}
              title="Back"
              color="blue"
              accessibilityLabel="Back button"
            />
            <Text>
              {props.appData.guideline.name}
            </Text>
            <Text>
              Organization: {props.appData.guideline.organization}
            </Text>
            <Text>
              Language: {props.appData.guideline.language}
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat erat vitae justo suscipit volutpat. Pellentesque gravida dapibus mauris ut blandit. Etiam vitae ligula eget magna fermentum efficitur eget consectetur eros. Integer pellentesque nunc ligula, commodo maximus lacus vestibulum eu. Proin eu aliquam arcu. Sed vulputate odio quis scelerisque luctus. Praesent tortor velit, sollicitudin id nisi ac, egestas condimentum nunc. Donec sollicitudin sollicitudin viverra. Nullam fermentum massa in rutrum elementum. Sed efficitur risus lobortis ex convallis, non luctus nunc venenatis. Proin condimentum luctus mauris at ullamcorper.
            </Text>
          </View>

        ) : null
      }
      </View>
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
  },
  row: {
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'blue'
  },
  header: {
    textAlign: 'center'
  }
})

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  watchGuidelineAddedEvent(dispatch);
  return {
    fetchData: () => dispatch(fetchData()),
    showGuideline: (data) => dispatch(showGuideline(data)),
    showList: (data) => dispatch(showList())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
