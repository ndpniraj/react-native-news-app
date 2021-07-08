import apiClient from './client';

const getAll = async () => {
  try {
    const response = await apiClient.get('/news');

    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    console.log('Error while getting all news.', error.message);
    return [];
  }
};

const getSingle = async id => {
  try {
    const response = await apiClient.get(`/news/single/${id}`);

    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    console.log('error while getting single news', error);
  }
};

const getByCategory = async (category, qty) => {
  const endpoint = qty ? `/news/${category}/${qty}` : `/news/${category}`;

  try {
    const response = await apiClient.get(endpoint);

    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    console.log('Error while getting categories news.', error.message);
    return [];
  }
};

const searchPost = async query => {
  if (!query) return {};
  try {
    const response = await apiClient.post(`/news/search/${query}`);
    return response.data;
  } catch (error) {
    console.log('Error while searching - searchPost newsAPi', error);
  }
};

export default {
  getAll,
  getByCategory,
  getSingle,
  searchPost,
};
