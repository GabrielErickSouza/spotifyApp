import * as C from './styles'
import React from 'react'
import { CaretLeft } from 'phosphor-react-native'
import Spotify from '../../assets/spotify.svg'
import women from '../../assets/women.png'
import stripes from '../../assets/stripes.png'
import stripesLine from '../../assets/stripesLine.png'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/stack'

export default function Logon() {
    const navigation = useNavigation<StackTypes>()
    return (
        <C.Container>
            <C.Header>
                <C.ButtonHeader>
                    <CaretLeft  color="#DDDDDD"/>
                </C.ButtonHeader>
            </C.Header>
            <C.Content>
                <Spotify width={235} height={75}/>
                <C.ContentTextTitle>Enjoy listening to music</C.ContentTextTitle> 
                <C.ContentTextSubTitle>Spotify is a proprietary sweedish audio and media services</C.ContentTextSubTitle> 
                <C.ContainerButtons>
                    <Button
                        text='Register'
                        width={147} 
                        height={73} 
                        backgroundColor='#42C83C' 
                        borderRadius={30}
                        alignItems='center'
                        justifyContent='center'
                        color='#ffffff'
                        fontSize={19}
                        lineHeight={26}
                        fontWeight={700}
                    />
                    <Button
                        text='Sign up'
                        width={147} 
                        height={73}  
                        borderRadius={30}
                        alignItems='center'
                        justifyContent='center'
                        color='#ffffff'
                        fontSize={19}
                        lineHeight={26}
                        fontWeight={700}
                        onPress={()=> navigation.navigate('SignIn')}
                    />
                    
                </C.ContainerButtons>
            </C.Content>
            <C.Image top={300} source={women}/>
            <C.Image left={250} source={stripesLine}/> 
            <C.Image left={260} bottom={-2} source={stripes}/>           
        </C.Container>
    )
}
