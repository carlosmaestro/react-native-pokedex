import React from 'react';

import { CustomText } from './styles';

export interface PlainTextProps {
  text?: string;
}

export function PlainText(props: PlainTextProps) {
  return <CustomText>{props.text}</CustomText>;
}
