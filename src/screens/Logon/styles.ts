import styled from 'styled-components/native'

export const Container = styled.View(props =>({
    flex: 1,
    backgroundColor: props.theme.styles.backgroundColor
}))

export const Header = styled.View({
    marginTop: 40,
    paddingHorizontal: 30
})

export const ButtonHeader = styled.TouchableOpacity(props =>({
    width: 32,
    height: 32,
    backgroundColor: props.theme.styles.backgroundButtonHeader,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
}))

export const Content = styled.View({
    width: '100%',
    alignItems: 'center',
    marginTop: 111,
    paddingHorizontal: 50,
    position: 'absolute',
    zIndex: 1
})

export const ContentTextTitle = styled.Text(props=>({
    color: props.theme.styles.textTitle,
    fontWeight: 700,
    fontSize: 20,
    lineHeight: '35px',
    textTransform: 'capitalize',
    marginTop: 55
}))

export const ContentTextSubTitle = styled.Text(props=>({
    color: props.theme.styles.subTitleLogonTitle,
    fontWeight: 400,
    fontSize: 17,
    lineHeight: '25px',
    textTransform: 'capitalize',
    marginTop: 21,
    textAlign: 'center'
}))
export const ContainerButtons = styled.View({
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30
})

export const Image = styled.Image<{
  left?: number
  top?: number
  bottom?: number
}>((prop) => ({
    position: 'absolute',
    top: prop.top,
    left: prop.left,
    bottom: prop.bottom
}))
