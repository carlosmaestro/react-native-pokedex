import React from 'react';

import { CustomLinkText, Pressable } from './styles';

export interface LinkTextProps {
  text?: string;
  onPressFunction?: Function;
}

export function LinkText(props: LinkTextProps) {
  return (
    <Pressable
      onPress={event => {
        if (props.onPressFunction) props?.onPressFunction(event);
      }}>
      <CustomLinkText>{props.text}</CustomLinkText>
    </Pressable>
  );
}
