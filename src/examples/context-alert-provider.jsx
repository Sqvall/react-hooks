import React, {useContext, useState} from "react";

const AlertContext = React.createContext()
// const ToggleContext = React.createContext()

export const useAlert = () => {
  return useContext(AlertContext)
}
// export const useAlertToggle = () => {
//   return useContext(ToggleContext)
// }

const ContextAlertProvider = ({children}) => {
  const [alert, setAlert] = useState(false)

  const toggle = () => setAlert(prevState => !prevState)

  return (
    <AlertContext.Provider value={{
      visible: alert,
      toggle
    }}>
      {/*<ToggleContext.Provider value={toggle}>*/}
        {children}
      {/*</ToggleContext.Provider>*/}
    </AlertContext.Provider>
  )
}

export default ContextAlertProvider
