import React from 'react'
import * as C from './styles'
import bille from '../../assets/bille.png'
import Spotify from '../../assets/spotify.svg'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes/stack'

export default function GetStarted() {

    const navigation = useNavigation<StackTypes>()
    
    return (
        <C.Container>
            <C.ImgBackground  source={bille}/>
            <Spotify  style={{margin:37}} width={196} height={59}/>
            <C.Content>
                <C.ContentText>Enjoy listening to music</C.ContentText>
                <C.ContentTextTwo>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, aut ducimus! Sapiente eaque fugiat dicta optio ad excepturi quis rem est.</C.ContentTextTwo>
                <Button
                    text='Get Started'
                    width={329} 
                    height={92}  
                    borderRadius={30}
                    alignItems='center'
                    backgroundColor='#42C83C'
                    color='#F6F6F6'
                    justifyContent='center'
                    fontSize={22}
                    fontWeight={700}
                    lineHeight={29}
                    marginTop={37}
                    onPress={()=> navigation.navigate('Logon')}
                />
            </C.Content>
        </C.Container>
    )
}

