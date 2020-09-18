import React from "react";
import {useAlert} from "./context-alert-provider";

const ContextAlert = () => {
  const alert = useAlert()

  if (!alert.visible) return null

  return (
    <div style={{backgroundColor: 'orangered'}} onClick={alert.toggle}>
      <p>Это очень важное сообщение</p>
    </div>
  )
}

export default ContextAlert
