import { Movie } from './movie';
import { Code } from './code';

export class Category {
  name: string;
  code: Code;
  movies: Movie[];
  totalPages: number;
  totalResults: number;
  url: string;
}
