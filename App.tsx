import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from './src/theme'
import StackComponent from './src/routes/stack'

export default function App() {
     
    return (
        <ThemeProvider theme={theme}>
            <StackComponent/>
            <StatusBar style="light" translucent />
        </ThemeProvider>
    )
}


