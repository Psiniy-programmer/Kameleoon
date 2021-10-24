import React from "react";
import TestsHeader from "./TestsHeader";
import {NormalizedTest} from "../../Data/types";
import Card from "./Card/Card";
import './Tests.css';

interface TestsProps {
  testsList: NormalizedTest[]
}

const Tests = ({testsList}: TestsProps) => {
  return <div>
    <TestsHeader/>
    {
      testsList.map((test) => <Card key={test.id} data={test}/>)
    }
  </div>
}

export default Tests;
