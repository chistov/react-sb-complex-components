import React from 'react'
import {render} from 'react-dom'
import ReactDOM from "react-dom";
import { Button } from "./stories/Button";

const App = () => {
  return (
    <>
      <div>Check it out</div>
      <Button label='lkj'/>
    </>
  )
}

ReactDOM.render(
<App/>,
document.getElementById('root')
);
