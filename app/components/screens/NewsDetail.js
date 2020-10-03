import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
} from 'react-native';

import newsApi from '../../api/newsApi';
import HorizotalList from '../lists/HorizotalList';
import Close from '../common/Close';
import { useNavigation } from '@react-navigation/native';
import ActivityIndicator from '../common/ActivityIndicator';

const { width, height } = Dimensions.get('window');

const NewsDetail = ({ route }) => {
  const [news, setNews] = useState({});
  const [relatedNews, setRelatedNews] = useState([]);
  const { id: postId, category: postCategory } = route.params.item;
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const fetchPost = async id => {
    setLoading(true);
    const result = await newsApi.getSingle(id);
    setNews(result);
  };

  const fetchRelatedPosts = async category => {
    const result = await newsApi.getByCategory(postCategory, 6);
    setRelatedNews(result.filter(item => item.id !== postId));
    setLoading(false);
  };

  useEffect(() => {
    fetchPost(postId);
    fetchRelatedPosts(postCategory);
  }, []);

  const { title, content, thumbnail } = news;
  return (
    <>
      <ActivityIndicator visible={loading} />
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: thumbnail }} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
        <View style={styles.relatedPostContainer}>
          <HorizotalList data={relatedNews} title='Related Posts' />
        </View>
      </ScrollView>
      <Close onPress={() => navigation.popToTop()} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#4e4d4d',
  },
  relatedPostContainer: {
    padding: 10,
  },
});

export default NewsDetail;
