import { Movie } from './movie';
import { CODE } from './code';

export class Category {
  name: string;
  code: CODE;
  movies: Movie[];
  totalPages: number;
  totalResults: number;
  url: string;
}
