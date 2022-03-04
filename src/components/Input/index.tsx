import React from 'react';
import { ImageSourcePropType, KeyboardTypeOptions } from 'react-native';

import { Container, Icon, TextInput } from './styles';

export interface InputOptions {
  placeholder?: string;
  source: ImageSourcePropType;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}
export function Input({ ...inputOptions }: InputOptions) {
  const { placeholder, source, secureTextEntry, keyboardType } = {
    ...inputOptions,
  };

  return (
    <Container>
      <Icon source={source} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </Container>
  );
}
