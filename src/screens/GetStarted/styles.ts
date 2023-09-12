import styled from 'styled-components/native'

export const Container = styled.View(props =>({
    flex: 1,
    backgroundColor: props.theme.backgroundColor,
    alignItems: 'center'
}))

export const ImgBackground = styled.Image({
    width:'100%',
    position:'absolute'
})

export const Content = styled.View({
    top:300,
    alignItems:'center',
    paddingHorizontal:53,
})

export const ContentText= styled.Text({
    color:'#DADADA',
    fontSize:25,
    lineHeight:'33px',
    fontWeight:700
})

export const ContentTextTwo = styled.Text({
    color:'#DADADA',
    fontSize:17,
    lineHeight:'22px',
    fontWeight:400,
    textAlign:'center',
    marginTop:21
})