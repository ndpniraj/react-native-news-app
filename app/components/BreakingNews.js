import React from 'react';
import { View, StyleSheet } from 'react-native';
import HorizotalList from './lists/HorizotalList';

const BreakingNews = ({ data }) => {
  return <HorizotalList title='Breaking News' data={data} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default BreakingNews;
