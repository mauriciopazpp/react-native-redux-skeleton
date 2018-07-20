import React, { Component } from 'react'
import {
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  View
} from 'react-native'
import { connect } from 'react-redux'

import { submit as style } from '@screen/auth/assets/style'
import loadingImg from '@screen/auth/assets/images/loading.gif'
import { Dimensions } from 'react-native'

const window = Dimensions.get('window')

const DEVICE_WIDTH = window.width
const MARGIN = 40

class ButtonSubmit extends Component {
  constructor(props) {
    super(props)
    this.buttonAnimated = new Animated.Value(0)
    this.growAnimated = new Animated.Value(0)
  }

  onPress() {
    if (this.props.auth.isFetching) {
      return
    }
    this.animation()
  }

  animation()
  {
    //this.setState({ isLoading: true })
    Animated.timing(this.buttonAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start()

    setTimeout(() => {
      this.onGrow()
    }, 2000)
  }

  /* cast = (screen) => {
    this.animation()
    setTimeout(() => {
      screen
      //this.setState({isLoading: false})
      this.buttonAnimated.setValue(0)
      this.growAnimated.setValue(0)
    }, 2300)
  } */

  onGrow() {
    Animated.timing(this.growAnimated, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
    }).start()
  }

  render() {
    const changeWidth = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    })
    const changeScale = this.growAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [1, MARGIN],
    })

    return (
      <View style={ style.container }>
        <Animated.View style={{ width: changeWidth }}>
          <TouchableOpacity
            style={ style.button }
            onPress={ this.props.onPress.bind(this) }
            activeOpacity={ 1 }>
            { this.props.auth.isFetching ? (
              <Image source={ loadingImg } style={ style.image } />
            ) : (
              <Text style={ style.text }>LOGIN</Text>
            )}
          </TouchableOpacity>
        </Animated.View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(ButtonSubmit)
