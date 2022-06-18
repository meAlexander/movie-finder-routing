import { Code } from '../models/code';

export interface CategoryMovieMetadata {
  name: string;
  categoryUrl: string;
  code: Code;
  searchParam?: string;
}
