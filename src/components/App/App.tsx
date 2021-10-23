import React, {useEffect, useState} from 'react';
import Header from '../Header';
import Container from "../Container";
import DataService, {DataServiceErrors} from "../../Data/DataService";
import {Site, Test} from "../../Data/types";
import './App.css';
import Input from "../Input";

const App = () => {
  const [sites, setSites] = useState<Site[] | DataServiceErrors>([]);
  const [tests, setTests] = useState<Test[] | DataServiceErrors>([]);

  useEffect(() => {
    DataService.getAllSites()
      .then((reqResult) => setSites(reqResult))
      .catch((errStatus) => setSites(errStatus))

    DataService.getAllTests()
      .then((reqResult) => setTests(reqResult))
      .catch((errStatus) => setTests(errStatus))
  }, [])

  return <Container>
    <Header/>
    <Input placeholder='What test are you looking for?'/>
  </Container>
}

export default App;
