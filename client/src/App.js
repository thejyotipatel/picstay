import {
  Header,
  SearchPanel,
  SinglePost,
  RelatedPost,
  UploadePost,
} from './components'
import { Register, Landing } from './pages'
import { Home } from './pages/dashboard'
function App() {
  return (
    <>
      <SinglePost />
      <UploadePost />
      <RelatedPost />
    </>
  )
}

export default App
