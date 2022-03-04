import styled from 'styled-components/native';

export const Container = styled.View`
  /* flex: 1; */
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const MyKeyboardAvoidingView = styled.KeyboardAvoidingView`
  /* height: 800px; */
  flex: 1;
  /* justify-content: center; */
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
`;

export const Header = styled.View`
  /* flex: 2; */
  /* min-height: 40; */
  width: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  /* border-bottom-right-radius: ${({ theme }) =>
    theme.GENERAL_PATTERNS.BORDER_RADIUS};
  border-bottom-left-radius: ${({ theme }) =>
    theme.GENERAL_PATTERNS.BORDER_RADIUS}; */
`;

export const InputView = styled.View`
  /* flex: 1; */
  min-height: 80px;
  justify-content: center;
  padding: 8px;
`;

export const GreyLogo = styled.ImageBackground`
  justify-content: center;
  /* flex: 1; */
  padding: 0 ${({ theme }) => theme.SIZES.LOW_INDENT};
`;

export const Body = styled.View`
  flex: 15;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_200};
`;
