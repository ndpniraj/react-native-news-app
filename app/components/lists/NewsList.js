import React from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView } from 'react-native';
import VerticalList from '../lists/VerticalList';

const NewsList = ({ route }) => {
  const data = route.params;
  const header = data[0].category.split('-').join(' ').toUpperCase();
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.categoryTitle}>{header}</Text>
      </View>
      <ScrollView>
        <VerticalList data={data} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#4e4d4d',
  },
  categoryTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
  },
});

export default NewsList;
