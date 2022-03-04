import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Header = styled.View`
  flex: 6;
  width: 100%;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.SIZES.LOW_INDENT};
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  border-bottom-right-radius: ${({ theme }) => theme.GENERAL_PATTERNS.BORDER_RADIUS};
  border-bottom-left-radius: ${({ theme }) =>
    theme.GENERAL_PATTERNS.BORDER_RADIUS};
`;

export const GreyLogo = styled.ImageBackground`
  width: 300px;
  height: 300px;
  top: -70px;
  right: -70px;
  position: absolute;
`;

export const InputView = styled.View`
  margin-top: ${({ theme }) => theme.SIZES.LOW_INDENT};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.SIZES.FONT_TITLE};
`;

export const Body = styled.View`
  flex: 5;
  justify-content: center;
  align-items: center;
  padding: 0 ${({ theme }) => theme.SIZES.LOW_INDENT};
`;

export const LoginButton = styled.Pressable`
  width: 100%;
  height: 54px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: ${({ theme }) => theme.GENERAL_PATTERNS.BORDER_RADIUS};
`;

export const LoginButtonTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.SIZES.FONT_SUBTITLE};
`;

export const PasswordHelpView = styled.View`
  flex-direction: row;
  width: 100%;
  flex: 2;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.SIZES.LOW_INDENT};
`;

export const RememberUserView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

export const ForgottenPasswordView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export const LoginButtonView = styled.View`
  width: 100%;
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export const AccountHelpView = styled.View`
  width: 100%;
  flex: 3;
  flex-direction: row;
  justify-content: center;
  /* align-items: flex-end; */
  /* background-color: red; */
`;
