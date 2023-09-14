import styled from 'styled-components/native'

export const Container = styled.View(props =>({
    flex: 1,
    backgroundColor: props.theme.styles.background
}))

export const Header = styled.View({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingHorizontal: 30
})

export const ButtonHeader = styled.TouchableOpacity({
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
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
export const ContentHeaderTitle = styled.Text({
    color: '#F2F2F2',
    fontSize: 20,
    lineHeight: '40px',
    fontWeight: 700
})
export const ContentHeaderSubtitle = styled.Text({
    fontSize: 12,
    fontWeight: 400,
    color: '#E1E1E1'
})

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
    borderColor:props.hasFocus === true?'#fff':'#757575',
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

export const LineSepatator = styled.View({
    height: 1,
    backgroundColor: '#757575',
    flex: 1
})

export const SepatatorText = styled.Text({
    color: '#fff',
    fontSize: 12,
    fontWeight: 400
})

export const SocialContainerButton = styled.View({
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 58,
    justifyContent: 'center',
    paddingTop: 20
})

export const FooterText = styled.Text({
    color: '#DCDCDC',
    alignSelf: 'center',
    paddingTop: 15
})

