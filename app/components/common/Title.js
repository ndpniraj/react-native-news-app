import React from 'react';
import { Text } from 'react-native';

const Title = ({ children, numberOfLines = 2, size = 18 }) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{ fontWeight: 'bold', fontSize: size }}
    >
      {children}
    </Text>
  );
};

export default Title;
