import React from 'react';
import {Route} from "react-router-dom";
import paths from "../../config/paths";
import Container from "../Container";
import DashBoard from "../../Pages/DashBoard";
import Results from "../../Pages/Results";
import Finalize from "../../Pages/Finalize";
import './App.css';

const App = () => {

  return <Container>
    <Route exact path={paths.dashboard} component={DashBoard}/>
    <Route path={paths.results.path} component={Results}/>
    <Route path={paths.finalize.path} component={Finalize}/>
  </Container>
}

export default App;
