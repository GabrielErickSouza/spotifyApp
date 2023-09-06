import styled from 'styled-components/native'


export const Button = styled.TouchableOpacity<{
    paddingH?:number,
    background?:string,
    height?:number,
    borderRadius?:number,
    alignItems?:string,
    justify?:string
    width?:number
}>(prop =>({
    paddingHorizontal:prop.paddingH,
    backgroundColor:prop.background,
    height:prop.height,
    borderRadius:prop.borderRadius,
    alignItems:prop.alignItems,
    justifyContent:prop.justify,
    width:prop.width
}))

export const TextButton = styled.Text<{color?:string,fontS?:number,fontW?:number,lineH?:number}>(prop=>({
    color:prop.color,
    fontSize:prop.fontS,
    fontWeight:prop.fontW,
    lineHeight:prop.lineH
}))