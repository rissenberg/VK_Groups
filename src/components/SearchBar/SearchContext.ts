import { createContext } from 'react';
import {Group} from '../../modules/types';

interface SearchContextInterface {
  groups: Group[],
  errorMessage: string,
  isLoading: boolean,
}

const defaultContext = {
  groups: [],
  errorMessage: '',
  isLoading: false,
}

export const SearchContext = createContext<SearchContextInterface>(defaultContext);
