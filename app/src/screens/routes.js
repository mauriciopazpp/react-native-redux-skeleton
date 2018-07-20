import { createStackNavigator } from 'react-navigation'

import login from '@screen/auth'
import anotherScreen from '@screen/anotherScreen'

const routes =
{
    login: {
        screen: login,
        navigationOptions: { header: null }
    },
    anotherScreen: {
        screen: anotherScreen,
        navigationOptions: { header: null }
    }
}

export default Routes = createStackNavigator (routes)
