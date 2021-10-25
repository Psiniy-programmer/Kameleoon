import React from "react";
import './Results.css';
import {Status} from "../../../Data/types";

interface ButtonProps {
  status: Status
}

const Results = ({status}: ButtonProps) => {
  const color = status === Status.DRAFT ? 'results_gray' : 'results_green';
  const text = status === Status.DRAFT ? 'finalize' : 'results';

  return <div className={`results ${color}`}>
    {text}
  </div>
}

export default Results;
