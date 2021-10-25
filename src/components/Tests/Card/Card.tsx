import React from "react";
import {NormalizedTest, Status} from "../../../Data/types";
import Button from "../../Button";
import {ButtonColors} from "../../Button/Button";
import './Card.css'

export interface CardProps {
  data: NormalizedTest,
  statusColor: string,
  lineColor?: string
}

const Card = ({data: {id, name, site, status, type}, statusColor, lineColor}: CardProps) => {

  const handleClickBtn = () => {
    console.log('clicked');
  }

  return <li className='card tests__wrapper'>
    <div className='card__line' style={{backgroundColor: lineColor}}/>
    <p className='card__name'>
      {name}
    </p>
    <p className='card__type'>
      {type}
    </p>
    <p className={`card__status ${statusColor}`}>
      {status.toString().toLocaleLowerCase()}
    </p>
    <div className='card__site'>
      <p className='card__type'>
        {site}
      </p>
      <Button
        callback={handleClickBtn}
        color={status === Status.DRAFT ? ButtonColors.GRAY : ButtonColors.GREEN}
        text={status === Status.DRAFT ? 'finalize' : 'results'}
      />
    </div>
  </li>
}

export default Card;
