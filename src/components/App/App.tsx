import React, {useState} from 'react';
import { SearchContext } from '../SearchBar/SearchContext';
import {SearchBar} from '../SearchBar/SearchBar';
import {Group} from '../../types/types';
import {GroupsList} from "../GroupsList/GroupsList";
import {LoadingScreen} from "../LoadingScreen/LoadingScreen";
import {SearchError} from "../SearchError/SearchError";

const App = () =>  {
  const [groups, setGroups] = useState<Group[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchBarProps = {
    setGroups,
    setErrorMessage,
    setIsLoading
  }

  const searchContext = {
    groups,
    errorMessage,
    isLoading,
  }

  return (
    <SearchContext.Provider value={searchContext}>
      <SearchBar {...searchBarProps} />
      <LoadingScreen />
      <SearchError />
      <GroupsList />
    </SearchContext.Provider>
  );
};

export default App;
