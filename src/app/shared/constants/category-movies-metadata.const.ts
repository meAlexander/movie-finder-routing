import { CategoryMovieMetadata } from './category-movie-metadata';
import { CODE } from '../models/code';

export const CATEGORY_MOVIES_METADATA: {
  [key in CODE]: CategoryMovieMetadata;
} = {
  POPULAR_MOVIES: {
    name: 'Popular movies',
    categoryUrl: '/discover/movie?sort_by=popularity.desc&page=',
    code: CODE.POPULAR_MOVIES
  },
  THEATER_MOVIES: {
    name: 'Theater movies',
    categoryUrl: '/discover/movie?primary_release_date.gte=2021-12-01&primary_release_date.gte=2021-12-30&page=',
    code: CODE.THEATER_MOVIES
  },
  KIDS_MOVIES: {
    name: 'Kids movies',
    categoryUrl: '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&page=',
    code: CODE.KIDS_MOVIES
  },
  TOP_RATED_MOVIES: {
    name: 'Top rated movies',
    categoryUrl: '/discover/movie?sort_by=vote_count.desc&page=',
    code: CODE.TOP_RATED_MOVIES
  },
  SEARCHED_MOVIES: {
    name: 'Searched movies',
    categoryUrl: '',
    code: CODE.SEARCHED_MOVIES,
    searchParam: ''
  }
};
