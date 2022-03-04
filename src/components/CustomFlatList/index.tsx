import React from 'react';

import { Card } from '../Card';
import { Container, SFlatList } from './styles';

export interface CustomFlatListProps {
  data?: any[];
  onPressFunction?: Function;
  navigation: any;
}

export const CustomFlatList = (props: CustomFlatListProps) => {
  const renderItem = ({ item }) => (
    <Card entityRef={item} navigation={props.navigation} />
  );

  return (
    <Container>
      <SFlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.id + item.name}
      />
    </Container>
  );
};

