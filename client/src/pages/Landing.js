import LandingLinks from '../utils/links'
import LandingHome from '../components/LandingHome'
import { Logo } from '../components'
import styled from 'styled-components'

const Landing = () => {
  return (
    <Wrapper>
      <header>
        <Logo />

        <div className='links'>
          <nav>
            {LandingLinks.map((item) => {
              return (
                <a key={item.id} href={item.url}>
                  {item.text}
                </a>
              )
            })}
          </nav>
          <div className='btns'>
            <button className='btn' onClick={() => console.log('log in')}>
              log in
            </button>
            <button className='btn' onClick={() => console.log('sign up')}>
              sign up
            </button>
          </div>
        </div>
      </header>
      <LandingHome />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: min(100%, 1400px);
  margin-inline: auto;
  height: auto;
  header {
    display: flex;
    justify-content: space-between;
    margin: 0.5em;
    .links {
      display: flex;
      align-items: center;
      justify-content: space-around;

      nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        a {
          text-decoration: none;
          color: var(--black-2);
          text-transform: capitalize;
          font-weight: 600;
          margin: 0.5em 1.5em;
          font-size: var(--font-size-3);
          transition: var(--transition);
          :hover {
            text-decoration: underline;
          }
        }
      }
      .btns {
        .btn {
          text-decoration: none;
          color: var(--blaack-1);
          background-color: var(--black-3);
          text-transform: capitalize;
          padding: 0.8em 1em;
          margin: 0.5em;
          font-weight: 600;
          border-radius: 20px;
          font-size: var(--font-size-3);
          transition: var(--transition);

          :first-child {
            background-color: var(--red-1);
            color: var(--white-1);
            :hover {
              background-color: var(--red-2);
            }
          }
          :last-child {
            :hover {
              background-color: var(--black-4);
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 679px) {
    header .links {
      nav {
        display: none;
      }
    }
  }
  @media screen and (max-width: 429px) {
    header .links {
      display: none;
    }
  }
`

export default Landing
