import { Display_Alert, Clear_Alert } from './action'

const reducer = (state, action) => {
  if (action.type === Display_Alert) {
    return {
      ...state,
      showAlert: true,
      alertType: 'not-sucess',
      alertText: 'Please provide all values!',
    }
  }

  if (action.type === Clear_Alert) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }
  throw new Error(`no such action type: ${action.type}`)
}

export default reducer
