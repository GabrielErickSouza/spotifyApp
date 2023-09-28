import React from 'react'
import * as C from './styles'
import { CaretLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

type Props={
    onPress?:()=> void
}

export default function ButtonBack(props:Props){
    const theme = useTheme()
    return(
        <C.ButtonBack onPress={props.onPress}>
            <CaretLeft color={theme.styles.iconButtonBack}/>
        </C.ButtonBack>
    )
}