import React, {useEffect} from "react";
import Gag from "../../Components/Gag";
import Header from "../../Components/Header";
import {useParams} from "react-router-dom";
import DataService from "../../Data/DataService";

type ResultsParams = {
  resultId: string
}

const Results = () => {
  const {resultId} = useParams<ResultsParams>();

  useEffect(() => {
    if (resultId) {
      DataService.getOneTest(Number(resultId))
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
    }
  }, [])

  return <>
    <Header title={'results'}/>
    <Gag text='Order basket redesing'/>
  </>
}

export default Results;
