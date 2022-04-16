import { useAppContext } from '../context/appContext'

const Alert = () => {
  const { alertType, alertText } = useAppContext()

  return <p className={` ${alertType} `}>{alertText}</p>
}

export default Alert
