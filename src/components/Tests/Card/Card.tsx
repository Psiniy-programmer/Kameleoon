import React, {useEffect, useState} from "react";
import {NormalizedTest, Status} from "../../../Data/types";
import Button from "../../Button";
import './Card.css'

export interface CardProps {
  data: NormalizedTest,
  statusColor: string,
  lineColor?: string
}

const Card = ({data: {id, name, siteName, status, type, siteId}, statusColor, lineColor}: CardProps) => {

  return <div className='card tests__wrapper'>
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
        {siteName}
      </p>
      <Button text={'Results'}/>
    </div>
  </div>
}

export default Card;
