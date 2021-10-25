import React, {useEffect, useState} from 'react';
import Header from '../Header';
import Container from "../Container";
import Input from "../Input";
import DataService, {DataServiceErrors} from "../../Data/DataService";
import {Data, NormalizedTest} from "../../Data/types";
import './App.css';
import Tests from "../Tests";

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

  const handleFilter = (): NormalizedTest[] => {
    return data.tests.filter((testCase) => testCase.name.toLowerCase().includes(searchInput))
  }

  return <Container>
    <Header/>
    <Input
      val={searchInput}
      updateValFunc={handleChangeInput}
      placeholder='What test are you looking for?'
    />
    {
      searchInput.length > 0 ?
        <Tests testsList={handleFilter()}/>
        : <Tests testsList={data.tests}/>
    }
  </Container>
}

export default App;
