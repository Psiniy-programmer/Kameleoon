import React from "react";
import {NormalizedTest, Status} from "../../../Data/types";
import Button from "../../Button";
import {ButtonColors} from "../../Button/Button";
import {useHistory} from "react-router-dom";
import './Card.css'
import paths from "../../../config/paths";

export interface CardProps {
  data: NormalizedTest,
  statusColor: string,
  lineColor?: string
}

const Card = ({data: {id, name, site, status, type}, statusColor, lineColor}: CardProps) => {
  const history = useHistory();

  const handleClickBtn = () => {
    switch (status) {
      case Status.DRAFT:
        history.push(paths.finalize.withId(id))
        break;
      default:
        history.push(paths.results.withId(id))
        break;
    }
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
