import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { CaretLeft, EyeSlash } from 'phosphor-react-native'
import * as C from './styles'
import Spotify from '../../assets/spotify.svg'
import GoogleLogo from '../../assets/googleLogo.svg'
import AppleLogo from '../../assets/appleLogo.svg'
import Button from '../../components/Button/index'


export default function SignIn() {
    
    return (
        <C.Container>
            <C.Header>
                <C.ButtonHeader>
                    <CaretLeft  color='#DDDDDD'/>
                </C.ButtonHeader>
                <Spotify  width={108} height={33}/>
                <View style={{width:32, height:32}}/>
            </C.Header>
            <C.ContentHeader>
                <C.ContentHeaderTitle>Sign in</C.ContentHeaderTitle>
                <C.ContentHeaderSubtitle>If you need any support click here</C.ContentHeaderSubtitle>
            </C.ContentHeader>
            <C.ContentInput>
                <C.InputGroup >
                    <C.Input  placeholderTextColor='#757575' placeholder='Enter Username Or Email'/>
                </C.InputGroup>
                <C.InputGroup >
                    <C.Input  placeholderTextColor='#757575' placeholder='Password'/>
                    <EyeSlash size={32} color='#757575' weight='light'/>
                </C.InputGroup>
                <C.Recovery>Recovery password</C.Recovery>
            </C.ContentInput>
            <C.ContainerButton>    
                <Button 
                    text='Sign In'
                    paddingHorizontal={30}
                    backgroundColor='#42C83C'
                    height={80}
                    borderRadius={30}
                    alignItems='center'
                    justifyContent='center'
                    color='#fff'
                    fontSize={20}
                    fontWeight={700}
                />
            </C.ContainerButton>
            <C.Sepatator>
                <C.LineSepatator />
                <C.SepatatorText>Or</C.SepatatorText>
                <C.LineSepatator />
            </C.Sepatator>

            <C.SocialContainerButton>
                <TouchableOpacity>
                    <GoogleLogo />
                </TouchableOpacity>
                <TouchableOpacity >
                    <AppleLogo />
                </TouchableOpacity>
            </C.SocialContainerButton>
            <C.FooterText>Not a member? Register now</C.FooterText>
        </C.Container>
    )
}

