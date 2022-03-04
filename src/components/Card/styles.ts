import styled from 'styled-components/native';

export const SCard = styled.Pressable`
  height: 150px;
  width: 100%;
  flex-direction: row;
  /* background-color: ${({ theme }) => theme.COLORS.BLACK_100}; */
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  padding: 20px;
  border-radius: ${({ theme }) => theme.GENERAL_PATTERNS.BORDER_RADIUS};
  margin-bottom: 12px;
  justify-content: space-between;
`;

export const CardImage = styled.Image`
  width: 130px;
  height: 130px;
  margin-right: 20px;
  margin-bottom: 30px;
`;

export const CardTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-size: ${({ theme }) => theme.SIZES.FONT_SUBTITLE};
  text-transform: uppercase;
`;

export const WhiteLogo = styled.ImageBackground`
  justify-content: center;
  /* flex: 1; */
  /* padding: 0 ${({ theme }) => theme.SIZES.LOW_INDENT}; */
  /* background-color: ${({ theme }) => theme.COLORS.PURPLE};
   */
  width: 150;
  height: 150;
  position: absolute;
  bottom: -12;
  right: 0;
`;
