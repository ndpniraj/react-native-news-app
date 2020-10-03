import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Title from '../common/Title';
import SmallCard from '../cards/SmallCard';
import { useNavigation } from '@react-navigation/native';

const HorizotalList = ({ title, data }) => {
  const navigation = useNavigation();
  return (
    <>
      <Title size={20}>{title}</Title>
      <View style={styles.listStyle}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <SmallCard
              onPress={() => navigation.push('NewsDetail', { item })}
              item={item}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 15,
  },
});

export default HorizotalList;
