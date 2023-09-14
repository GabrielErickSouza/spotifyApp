import React, {useState} from 'react'
import * as C from './styles'


type Props = {
    placeholder:string
    icon?:React.ReactNode
}

export default function Input (props:Props){
    const [hasFocus,setFocus] = useState(false)
    const onFocus = () => setFocus(true)
    const onBlur = () => setFocus(false)

    return (
        <C.InputGroup hasFocus={hasFocus}>
            <C.InputText onFocus={onFocus} onBlur={onBlur} placeholderTextColor='#757575' placeholder={props.placeholder}/>
            <>
                {props.icon}
            </>
        </C.InputGroup>
    )
}