import React, {useEffect, useState} from 'react';
import Header from '../Header';
import Container from "../Container";
import Input from "../Input";
import DataService, {DataServiceErrors} from "../../Data/DataService";
import {Data, NormalizedTest} from "../../Data/types";
import './App.css';
import Tests from "../Tests";
import SearchResult from "../SearchResult";

const App = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [data, setData] = useState<Data>({
    tests: [] as NormalizedTest[],
    error: DataServiceErrors.INIT
  })

  useEffect(() => {
    DataService.getAppInfo()
      .then((res) => setData(res))
      .catch((err) => setData(err))
  }, [])

  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  }

  const handleClearInput = () => {
    setSearchInput('');
  }

  const handleFilter = (): NormalizedTest[] => {
    return data.tests.filter((testCase) => testCase.name.toLowerCase().includes(searchInput))
  }

  return <Container>
    <Header/>
    <Input
      counterVal={
        searchInput.length > 0 ? handleFilter().length : data.tests.length
      }
      val={searchInput}
      updateValFunc={handleChangeInput}
      placeholder='What test are you looking for?'
    />
    {
      searchInput.length > 0 ?
        <SearchResult clearResultList={handleClearInput} data={handleFilter()}/>
        : <Tests testsList={data.tests}/>
    }
  </Container>
}

export default App;
