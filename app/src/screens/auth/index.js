import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { loginRedux } from './store/actions'

import { login as style } from './assets/style'
import backgroundImg from './assets/images/wallpaper.jpg'

import Submit from './containers/submit'
import Logo from './containers/logo'
import Form from './containers/form'

class LoginScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit() {
        this.props.loginRedux(this.state.email, this.state.password)
    }

    onChangeEmail(email) {
        this.setState(...this.state, { email: email})
    }

    onChangePassword(password) {
        this.setState(...this.state, { password: password})
    }

    componentDidUpdate() {
        if(!this.props.auth.isLoggedIn)
            return

        this.props.navigation.navigate('anotherScreen')
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={ backgroundImg } style={ style.background } />
                <View style={ style.container }>
                    <Logo />
                    <Form
                        onChangeEmail={ this.onChangeEmail.bind(this) }
                        onChangePassword={ this.onChangePassword.bind(this) }
                        email={ this.state.email }
                        password={ this.state.password } />
                    <Submit onPress={ this.onSubmit.bind(this) } />
                </View>
                <View>
                {
                    this.props.auth.isFetching && <Text>Carregando...</Text>
                }
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ loginRedux }, dispatch)
}

export default connect(
    mapStateToProps,
    matchDispatchToProps)
(LoginScreen)
