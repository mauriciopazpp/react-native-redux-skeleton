import React from 'react'
import { connect } from 'react-redux'

import Routes from '@screen/routes'

const App = () => <Routes />

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(App)
