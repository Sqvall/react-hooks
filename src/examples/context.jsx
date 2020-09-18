import React from "react";
import ContextAlert from "./context-alert";
import ContextMain from "./context-main";
import ContextAlertProvider from "./context-alert-provider";



const Context = () => {

  return (
    <ContextAlertProvider>
      <ContextAlert />
      <ContextMain />
    </ContextAlertProvider>
  )
}

export default Context
