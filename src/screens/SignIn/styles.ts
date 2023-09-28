import styled from 'styled-components/native'

export const Container = styled.View(props =>({
    flex: 1,
    backgroundColor: props.theme.styles.background
}))

export const Keyboard = styled.KeyboardAvoidingView({
    flex:1
})

export const Header = styled.View({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:30,
    paddingHorizontal: 30,
})


export const ContentHeader = styled.View({
    width: '100%',
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingBottom: 38,
    gap: 22
})

export const ContentHeaderTitle = styled.Text(props=>({
    color: props.theme.styles.textTitle,
    fontSize: 20,
    lineHeight: '40px',
    fontWeight: 700
}))

export const ContentHeaderSubtitle = styled.Text(props=>({
    fontSize: 12,
    fontWeight: 400,
    color: props.theme.styles.textSubTitle
}))

export const ContentInput = styled.View({
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 30,
    gap: 16
})

export const InputGroup = styled.View<{ hasFocus:boolean }>(props=>({
    width: '100%',
    paddingHorizontal: 27,
    paddingRight: 50,
    borderWidth: 1,
    borderColor:props.hasFocus === true?props.theme.styles.white:props.theme.styles.borderInput,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
}))

export const Input = styled.TextInput({
    height: 80,
    width:'100%',
    color: '#F2F2F2'
})

export const Recovery = styled.Text({
    color: '#AEAEAE',
    fontSize: 14,
    fontWeight: 700,
    paddingHorizontal: 25
})

export const ContainerButton = styled.View({
    paddingTop: 22,
    paddingHorizontal: 30
})

export const Sepatator = styled.View({
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingTop: 21,
    paddingHorizontal: 30
})

export const LineSepatator = styled.View(props=>({
    height: 1,
    backgroundColor: props.theme.styles.borderInput,
    flex: 1
}))

export const SepatatorText = styled.Text(props=>({
    color: props.theme.styles.white,
    fontSize: 12,
    fontWeight: 400
}))

export const SocialContainerButton = styled.View({
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 58,
    justifyContent: 'center',
    paddingTop: 20
})

export const FooterText = styled.Text(props=>({
    color: props.theme.styles.footerText,
    alignSelf: 'center',
    paddingTop: 15
}))

