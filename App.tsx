import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {ThemeProvider} from 'styled-components'
import Themes from './src/theme'
import StackComponent from './src/routes/stack'

export default function App() {
    const theme = Themes['dark'] || Themes['darkgetstarted']
    return (
        <ThemeProvider theme={theme}>
            <StackComponent/>
            <StatusBar style="light" translucent />
        </ThemeProvider>
    )
}


