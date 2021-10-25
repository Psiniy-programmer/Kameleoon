import React, {useEffect, useState} from 'react';
import Header from '../Header';
import Container from "../Container";
import Input from "../Input";
import './App.css';
import DataService, {DataServiceErrors} from "../../Data/DataService";
import {Data, NormalizedTest} from "../../Data/types";
import Tests from "../Tests";

const App = () => {
  const [data, setData] = useState<Data>({
    tests: [] as NormalizedTest[],
    error: DataServiceErrors.NONE
  })

  useEffect(() => {
    DataService.getAppInfo()
      .then((res) => setData(res))
      .catch((err) => setData(err))
  }, [])

  useEffect(() => {
    console.log(data);
  }, [data])

  return <Container>
    <Header/>
    <Input placeholder='What test are you looking for?'/>
    {
      data.error === DataServiceErrors.NONE && data.tests.length > 0 ? <Tests testsList={data.tests}/> : <p>loading</p>
    }
  </Container>
}

export default App;
