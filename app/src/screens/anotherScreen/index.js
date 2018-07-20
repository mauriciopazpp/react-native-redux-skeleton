import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import { getSomething } from './store/actions'

class AnotherScreen extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getSomething()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#d6d6d6', paddingTop: 12 }}>
                {
                    this.props.anotherScreenReducer.data
                        .map( param =>
                            {/* <SomeComponents
                                key={ param.id }
                                name={ param.name }
                            /> */}
                        )
                }
                </View>
                <View>
                {
                    this.props.exampleReducer.isFetching && <Text>Carregando...</Text>
                }
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { exampleReducer: state.exampleReducer }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ getSomething }, dispatch)
}

export default connect(
    mapStateToProps,
    matchDispatchToProps)
(AnotherScreen)
