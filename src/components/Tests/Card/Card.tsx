import React, {useEffect, useState} from "react";
import {NormalizedTest, Status} from "../../../Data/types";
import Button from "../../Button";
import './Card.css'

export interface CardProps {
  data: NormalizedTest
}

const Card = ({data: {id, name, siteName, status, type, siteId}}: CardProps) => {

  return <div className='card tests__wrapper'>
    <p className='card__name'>
      {name}
    </p>
    <p className='card__type'>
      {type}
    </p>
    <p className='card__status'>
      {status}
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
