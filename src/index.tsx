import React, {useState} from 'react'
import {render} from 'react-dom'
import ReactDOM from "react-dom";
import { Button } from "./stories/Button";
import List from "./common-components/List";
import {Header} from "./stories/Header";

const App = () => {
  let [id, setId] = useState(0);
  const updateNumber = (n:number) => {
    setId(n);
    console.log('upd: ', n);
  }

  const onLogin = () => console.log('onLogin')
  const onLogout = () => console.log('onLogout')
  const onCreateAccount = () => console.log('onCreateAcc')


  return (
    <>
      <Header onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount}></Header>
      <div>Item clicked {id}</div>
      <div>
        <List processClick={updateNumber}/>
      </div>
    </>
  )
}

ReactDOM.render(
<App/>,
document.getElementById('root')
);
