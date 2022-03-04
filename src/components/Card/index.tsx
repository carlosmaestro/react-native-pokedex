import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { EntityLinkRef } from '../../model/entity-link-ref';
import { CardImage, CardTitle, SCard, WhiteLogo } from './styles';

import Pokeball from '../../assets/images/pokeball.png';
import GreyLogoImg from '../../assets/images/grey-logo.png';

interface CardProps {
  entityRef: EntityLinkRef;
  navigation: any;
}

export function Card(props: CardProps) {

  return (
    <SCard
      key={props.entityRef.name + '' + Math.floor(Math.random() * 1000)}
      onPress={() =>
        props.navigation.navigate('PokemonDetail', {
          entityRef: props.entityRef,
        })
      }>
      <CardTitle> {props.entityRef.name} </CardTitle>
      <WhiteLogo source={GreyLogoImg}></WhiteLogo>
      <CardImage
        source={{
          uri: props.entityRef.imageUri,
        }}
      />
    </SCard>
  );
}
