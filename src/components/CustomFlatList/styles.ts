import styled from 'styled-components/native';

export const Pressable = styled.Pressable``;

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const SFlatList = styled.FlatList`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  padding: 10px ;
`;

