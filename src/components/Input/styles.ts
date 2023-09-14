import styled from 'styled-components/native'

export const InputGroup = styled.View<{ hasFocus:boolean }>(props=>({
    width: '100%',
    paddingHorizontal: 27,
    paddingRight: 50,
    borderWidth: 1,
    borderColor:props.hasFocus === true?'#fff':'#757575',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
}))


export const InputText = styled.TextInput({
    height: 80,
    width:'100%',
    color: '#F2F2F2'
})