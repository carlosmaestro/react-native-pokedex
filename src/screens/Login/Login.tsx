import React from 'react';

import CheckIconOff from '../../assets/images/check-icon-off.png';
import CheckIconOn from '../../assets/images/check-icon.png';
import GreyLogoImg from '../../assets/images/grey-logo.png';
import KeyIcon from '../../assets/images/key-icon.png';
import UserIcon from '../../assets/images/user-icon-group.png';
import { Checkbox } from '../../components/Checkbox';
import { Input } from '../../components/Input';
import { LinkText } from '../../components/LinkText';
import { PlainText } from '../../components/PlainText';
import {
  AccountHelpView,
  Body,
  Container,
  ForgottenPasswordView,
  GreyLogo,
  Header,
  InputView,
  LoginButton,
  LoginButtonTitle,
  LoginButtonView,
  PasswordHelpView,
  RememberUserView,
  Title,
} from './styles';

export function Login({ navigation }) {
  return (
    <Container>
      <Header>
        <GreyLogo source={GreyLogoImg} />
        <Title>Entre com seu usuário e senha:</Title>
        <InputView>
          <Input
            placeholder={'usuario@exemplo.com'}
            source={UserIcon}
            keyboardType={'email-address'}
          />
        </InputView>
        <InputView>
          <Input
            placeholder={'Senha'}
            source={KeyIcon}
            secureTextEntry={true}
          />
        </InputView>
      </Header>
      <Body>
        <PasswordHelpView>
          <RememberUserView>
            <Checkbox
              offIconSource={CheckIconOff}
              onIconSource={CheckIconOn}
              text={'Lembrar usuário'}
            />
          </RememberUserView>
          <ForgottenPasswordView>
            <LinkText text=" Esqueci a senha"></LinkText>
          </ForgottenPasswordView>
        </PasswordHelpView>
        <LoginButtonView>
          <LoginButton onPress={() => navigation.navigate('List')}>
            <LoginButtonTitle>ENTRAR</LoginButtonTitle>
          </LoginButton>
        </LoginButtonView>
        <AccountHelpView>
          <PlainText text="Não tem uma conta?"></PlainText>
          <LinkText text=" Cadastre-se aqui"></LinkText>
        </AccountHelpView>
      </Body>
    </Container>
  );
}
