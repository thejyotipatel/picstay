<<<<<<< HEAD
import Landing from './pages/Landing'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Landing />
      <Register />
=======
import { Header } from './components'
import { Register, Landing } from './pages'
import { Home } from './pages/dashboard'
function App() {
  return (
    <>
      <Header />
      <Home />
>>>>>>> eb08739... added
    </>
  )
}

export default App
