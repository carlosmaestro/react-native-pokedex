import styled from 'styled-components/native';

export const Pressable = styled.Pressable`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const CustomLinkText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GREEN};
  font-size: ${({ theme }) => theme.SIZES.SMALL_TEXT};
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
  position: relative;
  margin: 8px;
  margin-left: 0;
`;
