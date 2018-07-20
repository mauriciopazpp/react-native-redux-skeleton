import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, Image } from 'react-native'

import { userInput as style } from '@screen/auth/assets/style'

export default class UserInput extends Component {
  render() {
    return (
      <View style={ style.inputWrapper }>
        <Image source={ this.props.source } style={ style.inlineImg } />
        <TextInput
          style={ style.input }
          placeholder={ this.props.placeholder }
          secureTextEntry={ this.props.secureTextEntry }
          autoCorrect={ this.props.autoCorrect }
          autoCapitalize={ this.props.autoCapitalize }
          returnKeyType={ this.props.returnKeyType }
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          onChangeText={ this.props.onChangeText }
          value={ this.props.textValue }
        />
      </View>
    )
  }
}

UserInput.propTypes = {
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string
}
