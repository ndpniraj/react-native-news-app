import React, { useState, useEffect } from 'react';
import { Text, Button } from 'react-native';

import Screen from './app/components/Screen';

export default function App() {
  // set some state for our news components
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  // const useSate = initialValue => {
  //   let state = initialValue;

  //   const functionToResetState = value => {
  //     state = value;
  //   };

  //   return [state, functionToResetState];
  // };

  useEffect(() => {
    // make api call and change the state of our app
    setTimeout(() => {
      setNum(num + 5);
    }, 4000);
  }, []);

  return (
    <Screen>
      <Text>Num is {num}</Text>
      <Text>Num is two is {num2}</Text>
      <Button title='change num 2' onPress={() => setNum2(num2 + 5)} />
    </Screen>
  );
}
