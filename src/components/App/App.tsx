import React, {useEffect, useState} from 'react';
import Header from '../Header';
import Container from "../Container";
import Input from "../Input";
import './App.css';
import DataService, {DataServiceErrors} from "../../Data/DataService";
import {Data, NormalizedTest} from "../../Data/types";
import Tests from "../Tests";

const App = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [data, setData] = useState<Data>({
    tests: [] as NormalizedTest[],
    error: DataServiceErrors.NONE
  })

  useEffect(() => {
    DataService.getAppInfo()
      .then((res) => setData(res))
      .catch((err) => setData(err))
  }, [])

  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  }

  return <Container>
    <Header/>
    <Input
      val={searchInput}
      updateValFunc={handleChangeInput}
      placeholder='What test are you looking for?'
    />
    {
      data.error === DataServiceErrors.NONE && data.tests.length > 0 ? <Tests testsList={data.tests}/> : <p>loading</p>
    }
  </Container>
}

export default App;
