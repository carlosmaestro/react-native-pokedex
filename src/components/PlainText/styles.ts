import styled from 'styled-components/native';

export const CustomText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.PLAIN_TEXT};
  font-size: ${({ theme }) => theme.SIZES.SMALL_TEXT};
`;
