import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
  },
  bold: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
  light: {
    fontFamily: 'Roboto-Light',
    fontSize: 20,
  },
  medium: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  regular: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
  },
  thin: {
    fontFamily: 'Roboto-Thin',
    fontSize: 20,
  },
});
