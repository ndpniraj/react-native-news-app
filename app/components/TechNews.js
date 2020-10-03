import React from 'react';
import { View, StyleSheet } from 'react-native';
import HorizotalList from './lists/HorizotalList';

const TechNews = ({ data }) => {
  return <HorizotalList title='Tech News' data={data} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default TechNews;
