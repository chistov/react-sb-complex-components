import React from "react";

interface Props {
  processClick: Function;
}

const List = ({processClick}:Props) => {
  const nums = [0, 1, 2, 3];

  return (
    <ul>
      {nums.map((el, idx) => <li key={idx} onClick={() => processClick(idx)}>Item {el}</li>)}
    </ul>
  )
}

export default List;
