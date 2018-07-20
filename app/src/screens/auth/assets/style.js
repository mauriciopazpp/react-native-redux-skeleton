import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const window = Dimensions.get('window')

const DEVICE_WIDTH = window.width
const DEVICE_HEIGHT = window.height
const MARGIN = 40

const style = props => StyleSheet.create(props)

export const login = style({
  container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0, 
      justifyContent: 'center',
      alignItems: 'center',
    },
    background: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
  }
})

export const form = style({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 115,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
})

export const logo = style({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 110,
    height: 110,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20 ,
    fontSize: 20
  },
})

export const submit = style({
  container: {
    flex: 1,
    top: -20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: MARGIN
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d90fe',
    height: MARGIN,
    borderRadius: MARGIN/4,
    zIndex: 100
  },
  circle: {
    height: MARGIN,
    width: MARGIN,
    marginTop: -MARGIN,
    borderWidth: 1,
    borderColor: '#F035E0',
    borderRadius: 100,
    alignSelf: 'center',
    zIndex: 99,
    backgroundColor: '#F035E0',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
  image: {
    width: 24,
    height: 24,
  },
})

export const userInput = style({
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - MARGIN,
    height: MARGIN,
    marginHorizontal: MARGIN/2,
    paddingLeft: MARGIN,
    borderRadius: MARGIN/4,
    color: '#ffffff'
  },
  inputWrapper: {
    flex: 1,
    paddingTop: MARGIN/2
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: MARGIN/2,
    height: MARGIN/2,
    left: 35,
    top: 30
  }
})