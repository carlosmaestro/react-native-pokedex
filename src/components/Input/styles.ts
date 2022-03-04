import styled from 'styled-components/native';

import THEME from '../../../src/theme';

export const Container = styled.View`
  height: 54px;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  /* margin-top: ${({ theme }) => theme.SIZES.MID_INDENT}; */
  border-radius: ${({ theme }) => theme.GENERAL_PATTERNS.BORDER_RADIUS};
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: THEME.COLORS.BLACK_100,
})`
  flex: 1;
  height: 54px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  color: ${({ theme }) => theme.COLORS.PLAIN_TEXT};
  border-radius: ${({ theme }) => theme.GENERAL_PATTERNS.BORDER_RADIUS};
  font-size: ${({ theme }) => theme.SIZES.TEXT};
`;

export const Icon = styled.Image`
  width: 40px;
  height: 40px;
  position: relative;
  margin: 8px;
`;
