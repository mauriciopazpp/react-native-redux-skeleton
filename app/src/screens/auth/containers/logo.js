import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import { logo as style } from '@screen/auth/assets/style'
import logoImg from '../assets/images/logo.png'

import config from '!config'

export default class Logo extends Component {
  render() {
    return (
      <View style={ style.container }>
        <Image source={ logoImg } style={ style.image } />
        <Text style={ style.text }> { config.APP_NAME } </Text>
      </View>
    )
  }
}
