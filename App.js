import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider as Redux } from 'react-redux'

import store from '@store'
import Main from './app/main'

export default class App extends Component {
  render() {
    return (
      <Redux store={ store }>
        <Main />
      </Redux>
    )
  }
}

AppRegistry.registerComponent('Application', () => Application)
