import React, {useEffect, useState} from 'react';
import Header from '../Header';
import Container from "../Container";
import DataService, {DataServiceErrors} from "../../Data/DataService";
import {Site, Test} from "../../Data/types";
import './App.css';

const App = () => {
  const [sites, setSites] = useState<Site[] | DataServiceErrors>([]);
  const [tests, setTests] = useState<Test[] | DataServiceErrors>([]);

  useEffect(() => {
    DataService.getAllSites()
      .then((reqResult) => setSites(reqResult))
      .catch((errStatus) => setSites(errStatus))
  }, [])

  return <Container>
    <Header/>
  </Container>
}

export default App;
