import React from "react";
import {useAlert} from "./context-alert-provider";

const ContextMain = () => {
  const {toggle} = useAlert()

  return (
    <>
      <h1>Привет в примере с Context</h1>
      <button onClick={toggle}>Показать алерт </button>
    </>
  )
}

export default ContextMain
