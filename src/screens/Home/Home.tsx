import React from 'react';

import { View, Text } from 'react-native';

import { Container, styles } from './styles';

export function Home() {
  return (
    <Container>
      <Text style={styles.bold}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl
        dui, auctor in fringilla in, bibendum ac lacus. Ut tempor porttitor ex,
      </Text>
      <Text style={styles.light}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl
        dui, auctor in fringilla in, bibendum ac lacus. Ut tempor porttitor ex,
      </Text>
      <Text style={styles.medium}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl
        dui, auctor in fringilla in, bibendum ac lacus. Ut tempor porttitor ex,
      </Text>
      <Text style={styles.regular}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl
        dui, auctor in fringilla in, bibendum ac lacus. Ut tempor porttitor ex,
      </Text>
      <Text style={styles.thin}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl
        dui, auctor in fringilla in, bibendum ac lacus. Ut tempor porttitor ex,
      </Text>
    </Container>
  );
}
