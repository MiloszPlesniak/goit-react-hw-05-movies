import axios from 'axios';

const API_KEY = 'd9966d378d1934b9425ef6ee448d16ed';
export const fetchFromApiList = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=' + API_KEY
  );

  return response.data.results;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_KEY
  );
  return response.data;
};
export const fetchMovieByQuery = async query => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie?api_key=' +
      API_KEY +
      '&query=' +
      query
  );
  return response.data.results;
};
export const fetchMovieReviewsOrCast = async (id, type) => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/' +
      id +
      '/' +
      type +
      '?api_key=' +
      API_KEY
  );

  return response.data;
};
