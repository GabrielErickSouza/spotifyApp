import * as C from './styles'
import bille from '../../assets/bille.png'
import Spotify from '../../assets/spotify.svg'
import React from 'react'

export default function GetStarted() {
    return (
        <C.Container>
            <C.ImgBackground  source={bille}/>
            <Spotify  style={{margin:37}} width={196} height={59}/>
            <C.Content>
                <C.ContentText>Enjoy listening to music</C.ContentText>
                <C.ContentTextTwo>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, aut ducimus! Sapiente eaque fugiat dicta optio ad excepturi quis rem est.</C.ContentTextTwo>
                <C.Button>
                    <C.TextButton>Get Started</C.TextButton>
                </C.Button>
            </C.Content>
        </C.Container>
    )
}

