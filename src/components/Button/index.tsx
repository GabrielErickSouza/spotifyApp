import React from 'react'
import * as C from './styles'


type Props = {
  disabledBg?:boolean 
  text?: string
  onPress?: ()=> void
}

export default function Button ({text, onPress, disabledBg=false}: Props){
    
    return (
        <C.Button
            disabledBg={disabledBg}
            onPress={onPress}
        >
            <C.TextButton>
                {text}
            </C.TextButton>
        </C.Button>
    )
}
