import { createMaterialTopTabNavigator } from 'react-navigation-tabs'

/*import homeScreenExample from '@screen/anotherScreen'*/

export default createMaterialTopTabNavigator(
    {
        /*Tab1: homeScreenExample*/
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 16
            },
            activeTintColor: '#fff',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#12457a'
            },
            indicatorStyle: {
                backgroundColor: '#000',
            },
        }
    }
)
