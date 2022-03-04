import React, { useState } from 'react';
import { ImageSourcePropType } from 'react-native';

import { PlainText } from '../PlainText';
import { Icon, Pressable } from './styles';

export interface CheckboxProps {
  text?: string;
  onPressFunction?: Function;
  offIconSource?: ImageSourcePropType;
  onIconSource?: ImageSourcePropType;
}

export function Checkbox(props: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Pressable
      onPress={event => {
        setIsChecked(!isChecked);
        if (props.onPressFunction) props?.onPressFunction(event);
      }}>
      {isChecked ? (
        <Icon source={props.onIconSource} />
      ) : (
        <Icon source={props.offIconSource} />
      )}
      <PlainText text={props.text} />
    </Pressable>
  );
}
