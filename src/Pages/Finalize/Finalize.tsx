import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import Gag from "../../Components/Gag";
import Header from "../../Components/Header";
import DataService from "../../Data/DataService";

type FinalizeParams = {
  finalizeId: string
}

const Finalize = () => {
  const {finalizeId} = useParams<FinalizeParams>();

  useEffect(() => {
    if (finalizeId) {
      DataService.getOneTest(Number(finalizeId))
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
    }
  }, [])

  return <>
    <Header title={'finalize'}/>
    <Gag text='Spring promotion'/>
  </>
}

export default Finalize;
