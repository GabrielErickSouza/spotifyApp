import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import GetStarted from '../screens/GetStarted'
import Logon from '../screens/Logon'
import SignIn from '../screens/SignIn'

const Stack = createNativeStackNavigator()

type StackNavigation ={
    GetStarted: undefined,
    Logon:undefined,
    SignIn:undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function StackComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='GetStarted' component={GetStarted} options={{}}/>
                <Stack.Screen name='Logon' component={Logon}/>
                <Stack.Screen name='SignIn' component={SignIn}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}