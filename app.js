import React from 'react'
import { TouchableHighlight, View, Text, StyleSheet, ListView } from 'react-native'

import { connect } from 'react-redux'
import { watchGuidelineAddedEvent } from './actions'

let styles

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText,
    mainContent
  } = styles

  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  console.log(props);

  return (
    <View style={container}>
      <View>
        <Text>
          Clinical Guidelines
        </Text>
      </View>
      <View style={mainContent}>
      {
        props.appData.isFetching && <Text>Loading</Text>
      }
      {
        props.appData.data.length ? (
          <ListView
            style={mainContent}
            dataSource={ds.cloneWithRows(props.appData.data)}
            renderRow={(rowData) => <Text>{rowData.name}</Text>}
          />
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
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
