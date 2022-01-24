import React from "react";
import PropTypes from 'prop-types'
import {Header} from "../stories/Header";

const List = (props) => {
  const nums = [0, 1, 2, 3];

  return (
    <>
      <ul>
        { nums.map((el, idx) => <li key={idx} onClick={() => props.processClick(idx)}>Item {el}</li>) }
      </ul>
    </>
  )
}

List.propTypes = {
  processClick: PropTypes.func
}

export default List;
