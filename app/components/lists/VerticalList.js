import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../common/Title';
import VerticalCard from '../cards/VerticalCard';
import { useNavigation } from '@react-navigation/native';

const VerticalList = ({ title, data }) => {
  const navigation = useNavigation();
  return (
    <View>
      {title && <Title>{title}</Title>}
      <View style={styles.container}>
        {data.map(item => (
          <VerticalCard
            item={item}
            key={item.id}
            onPress={() => navigation.navigate('NewsDetail', { item })}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

export default VerticalList;
