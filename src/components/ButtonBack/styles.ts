import styled from 'styled-components/native'

export const ButtonBack = styled.TouchableOpacity(props =>({
    width: 32,
    height: 32,
    backgroundColor:  props.theme.styles.backgroundButtonHeader,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
}))