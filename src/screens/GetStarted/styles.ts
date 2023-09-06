import styled from 'styled-components/native';


export const Container = styled.View({
    flex: 1,
    backgroundColor: "#0D0C0C",
    alignItems: 'center'
})

export const ImgBackground = styled.Image({
    width:'100%',
    position:'absolute'
})

export const Content = styled.View({
    top:300,
    alignItems:'center',
    paddingHorizontal:53
})

export const ContentText= styled.Text({
    color:'#DADADA',
    fontSize:25,
    lineHeight:33,
    fontWeight:700
})

export const ContentTextTwo = styled.Text({
    color:'#DADADA',
    fontSize:17,
    lineHeight:22,
    fontWeight:400,
    textAlign:'center',
    marginTop:21
})

export const Button = styled.TouchableOpacity({
    width:329, 
    height:92,
    backgroundColor:"#42C83C",
    borderRadius:30,
    marginTop:37,
    alignItems:"center",
    justifyContent:"center"
})
export const TextButton = styled.Text({
    color:'#F6F6F6',
    fontSize:22,
    lineHeight:29,
    fontWeight:700,
    textAlign:'center',
    textTransform:'capitalize'
})