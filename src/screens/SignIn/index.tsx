import { View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import * as C from './styles'
import { CaretLeft, EyeSlash } from 'phosphor-react-native'
import Spotify from '../../assets/spotify.svg'
import GoogleLogo from '../../assets/googleLogo.svg'
import AppleLogo from '../../assets/appleLogo.svg'
import Button from '../../components/Button/index'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/stack'
import Input from '../../components/Input'

export default function SignIn() {
    
    const navigation = useNavigation<StackTypes>()

    return (
        <C.Container>
            <ScrollView>
                <C.Header>
                    <C.ButtonHeader onPress={()=> navigation.navigate('Logon')}>
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
                    <Input placeholder='Enter Username Or Email'/>
                    <Input icon={<EyeSlash size={32} color='#757575' weight='light'/>} placeholder='Password'/>
                    {/* <EyeSlash size={32} color='#757575' weight='light'/> */}
                    <C.Recovery>Recovery password</C.Recovery>
                </C.ContentInput>
                <C.ContainerButton>    
                    <Button text='Sign In'/>
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
            </ScrollView>
        </C.Container>
    )
}

