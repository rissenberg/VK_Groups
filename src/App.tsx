import React, {useState} from 'react';
import { SearchContext } from './components/SearchBar/SearchContext';
import {SearchBar} from './components/SearchBar/SearchBar';
import {Group} from './modules/types';
import {GroupsList} from "./components/GroupsList/GroupsList";
import {LoadingScreen} from "./components/LoadingScreen/LoadingScreen";
import {SearchError} from "./components/SearchError/SearchError";

const App = () =>  {
  const [groups, setGroups] = useState<Group[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchFormProps = {
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
      <SearchBar {...searchFormProps} />
      <LoadingScreen />
      <SearchError />
      <GroupsList />
    </SearchContext.Provider>
  );
};

export default App;
