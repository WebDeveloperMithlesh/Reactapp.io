import React from 'react'
import Homecompo from './Appmain'
import {  Route, Switch  } from "react-router-dom";
import Baoyc from './Baoyc/Components/home/index'
export default function App() {
  return (
    <>
    <Switch>
    <Route exact path="/" component={Baoyc} />
      </Switch>
    </>
  )
}
