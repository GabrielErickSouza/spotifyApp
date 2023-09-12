import React from 'react'
import * as C from './styles'


type Props = {
  width?: number
  marginTop?: number
  height?: number
  backgroundColor?: string
  paddingHorizontal?: number
  borderRadius?: number
  alignItems?: string
  justifyContent?: string
  color?: string
  fontSize?: number
  fontWeight?: number
  text?: string
  lineHeight?: number 
  onPress?: ()=> void
}

export default function Button (props: Props){
    
    return (
        <C.Button
            paddingH={props.paddingHorizontal}
            width={props.width}
            height={props.height}
            borderRadius={props.borderRadius}
            marginTop={props.marginTop}
            alignItems={props.alignItems}
            justify={props.justifyContent}
            background={props.backgroundColor}
            onPress={props.onPress}
        >
            <C.TextButton
                color={props.color}
                fontS={props.fontSize}
                fontW={props.fontWeight}
                lineH={props.lineHeight}
            >
                {props.text}
            </C.TextButton>
        </C.Button>
    )
}
