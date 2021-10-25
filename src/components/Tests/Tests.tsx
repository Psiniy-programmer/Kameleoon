import React, {useEffect, useState} from "react";
import TestsHeader from "./TestsHeader";
import {NormalizedTest, Status} from "../../Data/types";
import Card from "./Card/Card";
import './Tests.css';

interface TestsProps {
  testsList: NormalizedTest[]
}

export enum SortTypes {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type SortFields = 'name' | 'type' | 'site' | 'status';

export type SortTests = {
  order: SortTypes,
  field: SortFields
}

const Tests = ({testsList}: TestsProps) => {
  const [sortedList, setSortedList] = useState<NormalizedTest[]>(testsList);
  const [sortOrder, setSortOrder] = useState<SortTests>({
    order: SortTypes.ASC,
    field: 'name'
  });

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

  const sortByStatus = (): void => {
    // ASC: Online, Paused, Stopped, Draft
    // DESC: Draft, Stopped, Paused, Online
    const {ONLINE, PAUSED, STOPPED, DRAFT} = Status;
    const {order} = sortOrder;
    let keywords: string[] = [];

    switch (order) {
      case SortTypes.ASC:
        keywords = [ONLINE, PAUSED, STOPPED, DRAFT];
        break;
      case SortTypes.DESC:
        keywords = [DRAFT, STOPPED, PAUSED, ONLINE];
        break;
      default:
        break;
    }

    if (!keywords.length) {
      return;
    }

    const res: NormalizedTest[] = keywords.reduce((acc: NormalizedTest[], cur) => {
      const tests: NormalizedTest[] = testsList.filter((test) => test.status.toLowerCase() === cur.toLowerCase());

      return [...acc, ...tests];
    }, [] as NormalizedTest[]);

    setSortedList(res);
  }

  const sortByAlphabetical = (field: SortFields): void => {
    const {order} = sortOrder;

    const res = testsList.sort((a, b) => {
      const textA = a[field].toLowerCase();
      const textB = b[field].toLowerCase();

      if (order === SortTypes.ASC) {
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      } else {
        return (textA < textB) ? 1 : (textA > textB) ? 0 : 1;
      }
    });

    setSortedList(res);

  }

  const sortTable = (field: SortFields): void => {
    const {order} = sortOrder;

    if (field === 'status') {
      sortByStatus();
    } else {
      sortByAlphabetical(field);
    }
    let newSortOrder: SortTypes;

    if (sortOrder.field !== field) {
      newSortOrder = order;
    } else {
      newSortOrder = order === SortTypes.ASC ? SortTypes.DESC : SortTypes.ASC;
    }

    setSortOrder({
      order: newSortOrder,
      field: field
    });
  }

  return <main>
    <TestsHeader
      sortTableFunc={sortTable}
      sortInfo={sortOrder}
    />
    <ul className='list'>
      {
        sortedList.map((test) => <Card
          statusColor={getStatusColor(test.status)}
          key={test.id}
          data={test}
          lineColor={test.color}
        />)
      }
    </ul>
  </main>
}

export default Tests;
