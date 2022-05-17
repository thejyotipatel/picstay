import Alert from './alert'
<<<<<<< HEAD
export { Alert }
=======
import Header from './header'
import { BsPinterest } from 'react-icons/bs'
import styled from 'styled-components'

const Logo = () => {
  return (
    <Wrapper className='logo'>
      <span className='logo-icon'>
        <BsPinterest />
      </span>
      <span className='logo-text'>Picstay</span>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  color: var(--red-2);
  margin: 1em;
  display: flex;
  align-items: center;
  .logo-icon {
    font-size: 2em;
    margin-right: 5px;
  }
  span {
    color: var(--red-1);
    font-size: var(--font-size-4);
    font-weight: 800;
  }
`
export { Alert, Header, Logo }
>>>>>>> eb08739... added
