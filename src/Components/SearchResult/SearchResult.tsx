import React from "react";
import {NormalizedTest} from "../../Data/types";
import Tests from "../Tests";
import Button from "../Button";
import {ButtonColors} from "../Button/Button";
import './SearchResult.css';

interface SearchResultProps {
  data: NormalizedTest[],
  clearResultList: () => void
}

const SearchResult = ({data, clearResultList}: SearchResultProps) => {
  if (data.length > 0) {
    return <Tests testsList={data}/>
  } else {
    return <div className='emptyResult'>
      <h4 className='emptyResult__text'>Your search did not match any results.</h4>
      <Button
        callback={clearResultList}
        color={ButtonColors.GREEN}
        text='reset'
      />
    </div>
  }
}

export default SearchResult;
