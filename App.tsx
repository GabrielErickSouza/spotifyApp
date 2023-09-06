import { StatusBar } from 'expo-status-bar'
import React from 'react'
import GetStarted from './src/screens/GetStarted'
import Logon from './src/screens/Logon'
import SignIn from './src/screens/SignIn'

export default function App() {
    return (
        <>
            <SignIn />
            <StatusBar style="light" translucent />
        </>
    )
}


