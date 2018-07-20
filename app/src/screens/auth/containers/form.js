import React, { Component } from 'react'
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native'

import { form as style } from '@screen/auth/assets/style'
import usernameImg from '../assets/images/username.png'
import passwordImg from '../assets/images/password.png'
import eyeBlackImg from '../assets/images/eye_black.png'

import UserInput from '@screen/auth/containers/userInput'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
        passwordShowing: true,
        pressingShowPassword: false
    }
  }

  showPassword() {
    this.state.pressingShowPassword === false
      ? this.setState({ passwordShowing: false, pressingShowPassword: true })
      : this.setState({ passwordShowing: true, pressingShowPassword: false })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={ style.container }>
        <UserInput
          source={ usernameImg }
          placeholder="E-mail"
          autoCapitalize={ 'none' }
          returnKeyType={ 'done' }
          autoCorrect={ false }
          onChangeText={ this.props.onChangeEmail }
          textValue={ this.props.email }
        />
        <UserInput
          source={ passwordImg }
          secureTextEntry={ this.state.passwordShowing }
          placeholder="Password"
          returnKeyType={ 'done' }
          autoCapitalize={ 'none' }
          autoCorrect={ false }
          onChangeText={ this.props.onChangePassword }
          textValue={ this.props.password }
        />
        <TouchableOpacity
          activeOpacity={ 0.7 }
          style={ style.btnEye }
          onPress={ this.showPassword.bind(this) }>
          <Image source={ eyeBlackImg } style={ style.iconEye } />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}
