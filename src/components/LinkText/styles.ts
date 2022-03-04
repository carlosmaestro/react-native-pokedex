import styled from 'styled-components/native';

export const Pressable = styled.Pressable``;

export const CustomLinkText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GREEN};
  font-size: ${({ theme }) => theme.SIZES.SMALL_TEXT};
`;
