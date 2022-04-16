import React, { useContext, useReducer } from 'react'
import { Display_Alert, Clear_Alert } from './action'
import reducer from './reducer'

const initalState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  showSidebar: false,
  // token: token,
}
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  const displayAlert = () => {
    dispatch({ type: Display_Alert })
    clearAlert()
  }
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: Clear_Alert })
    }, 3000)
  }

  return (
    <AppContext.Provider value={{ ...state, clearAlert, displayAlert }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
