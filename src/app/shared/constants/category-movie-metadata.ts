import { CODE } from '../models/code';

export interface CategoryMovieMetadata {
  name: string;
  categoryUrl: string;
  code: CODE;
  searchParam?: string;
}
