import React from "react";
import TestsHeader from "./TestsHeader";
import {NormalizedTest, Status} from "../../Data/types";
import Card from "./Card/Card";
import './Tests.css';

interface TestsProps {
  testsList: NormalizedTest[]
}

const Tests = ({testsList}: TestsProps) => {
  const getStatusColor = (status: Status): string => {
    switch (status) {
      case Status.DRAFT:
        return 'test__status_draft'
      case Status.ONLINE:
        return 'test__status_online';
      case Status.PAUSED:
        return 'test__status_paused';
      case Status.STOPPED:
        return 'test__status_stopped'
      default:
        return '';
    }
  }

  return <div>
    <TestsHeader/>
    <ul className='list'>
      {
        testsList.map((test) => <Card
          statusColor={getStatusColor(test.status)}
          key={test.id}
          data={test}
          lineColor={test.color}
        />)
      }
    </ul>
  </div>
}

export default Tests;
