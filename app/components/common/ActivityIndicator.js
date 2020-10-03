import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const ActivityIndicator = ({ visible }) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../assets/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

export default ActivityIndicator;
