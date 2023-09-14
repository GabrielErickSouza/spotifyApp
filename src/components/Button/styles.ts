import styled from 'styled-components/native'


export const Button = styled.TouchableOpacity<{disabledBg:boolean}>(props=>({
    paddingHorizontal:30,
    backgroundColor: props.disabledBg === true ? 'transparent' : props.theme.styles.default,
    height:92,
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',
}))

export const TextButton = styled.Text({
    color:'#F6F6F6',
    fontSize:22,
    fontWeight:700,
    lineHeight:'29px'
})