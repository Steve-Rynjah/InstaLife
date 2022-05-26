import React from "react";
import {createStackNavigator} from '@react-navigation/stack'

import {Splash} from '../screens/Splash.screen'
// import {Registration} from '../screens/Registration.screen'
import {TabNav} from './Tab.routes'

const Stack = createStackNavigator();

export const StackNav = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            {/* <Stack.Screen name="Registration" component={Registration} options={{headerShown: false}}/> */}
            <Stack.Screen name="TabNav" component={TabNav} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}