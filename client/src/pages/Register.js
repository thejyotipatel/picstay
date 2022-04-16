import { useState } from 'react'
import { BsPinterest } from 'react-icons/bs'
import styled from 'styled-components'
// import { Alert } from '../components'
import { useAppContext } from '../context/appContext'

const initalState = {
  email: '',
  password: '',
  age: '',
  alertEmail: false,
  alertPassword: false,
  alertAge: false,

  isMember: false,
}

const Register = () => {
  const [value, setValue] = useState(initalState)
  const { isLoading, showAlert, clearAlert, displayAlert } = useAppContext()

  const toogleChange = () => {
    setValue({ ...value, isMember: !value.isMember })
  }
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()

    const { email, age, password, isMember } = value
    if (!email) {
      value.alertEmail = true
      // displayAlert()
      return
    }
    if (!password) {
      value.alertPassword = true
      // displayAlert()
      return
    }
    if (!isMember && !age) {
      value.alertAge = true
      // displayAlert()
      return
    }
  }
  const Alert = ({ text }) => {
    return <p className=''>{text}</p>
  }
  return (
    <Wrapper>
      <div className='register-contant'>
        <div className='header'>
          <div className='logo'>
            <span className='logo-icon'>
              <BsPinterest />
            </span>
          </div>
          <h1>Welcome to Picstay </h1>
          {!value.isMember && <p>Find new ideas to try</p>}
        </div>

        {/* <Alert /> */}
        <form onSubmit={onSubmit} className='from-control'>
          <div className='input-control'>
            <input
              type='text'
              value={value.email}
              onChange={handleChange}
              name='email'
              placeholder='email'
            />
            {value.alertEmail && <Alert text={'email'} />}
          </div>

          <div className='input-control'>
            <input
              type='text'
              name='password'
              value={value.password}
              onChange={handleChange}
              placeholder={`${
                value.isMember ? 'password' : 'Create a password'
              }`}
            />
            {value.alertPassword && <Alert text={'password'} />}
          </div>
          {!value.isMember && (
            <div className='input-control'>
              <input
                type='text'
                name='age'
                value={value.age}
                onChange={handleChange}
                placeholder='Age'
              />
              {value.alertAge && <Alert text={'age'} />}
            </div>
          )}
          <button type='submit' className='btn'>
            continue
          </button>
          <p className='or'>or</p>
          <p className='register-btns'>
            {!value.isMember ? 'Already a member?' : 'Not on Pinterest yet?'}
            <button type='button' onClick={() => toogleChange()}>
              {!value.isMember ? 'Log in' : 'Sign up'}
            </button>
          </p>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: min(95%, 400px);
  margin-inline: auto;
  /* border: 2px dashed hotpink; */
  .register-contant {
    box-shadow: var(--box-shadow-2);
    border-radius: 2em;
    background-color: var(--white-1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1em;

    .header {
      text-align: center;
      .logo {
        color: var(--red-1);
        align-items: center;
        .logo-icon {
          font-size: 2em;
          margin-right: 5px;
        }
      }
      h1 {
        margin: 0.5em 0 0 0;
        font-weight: 600;
      }
      p {
        margin: 0.5em 0 0 0;
        font-weight: 500;
      }
    }
    .from-control {
      margin: 1em 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .input-control {
        margin: 0.8em;
        width: min(100%, 300px);
        margin-inline: auto;
        input {
          width: 100%;
          padding: 1em;
          border: 2px solid var(--black-3);
          border-radius: 2em;
          font-size: var(--font-size-3);
          text-transform: capitalize;
          :focus {
            border: 2px solid blueviolet;
          }
        }
      }
      .btn {
        text-decoration: none;
        color: var(--white-1);
        background-color: var(--red-1);
        text-transform: capitalize;
        padding: 0.8em 1em;
        margin: 0.8em;
        width: min(100%, 300px);
        font-weight: 600;
        border-radius: 2em;
        font-size: var(--font-size-3);
        transition: var(--transition);
        box-shadow: var(--box-shadow-3);

        :hover {
          background-color: var(--red-2);
        }
      }
      .or {
        font-weight: 700;
        font-size: var(--font-size-3);
        text-transform: uppercase;
      }
      .register-btns {
        font-weight: 500;
        button {
          text-decoration: none;
          color: var(--black-2);
          background-color: transparent;
          text-transform: capitalize;
          margin: 0.1em;
          font-weight: 600;
          border: 0;
          font-size: var(--font-size-2);
          transition: var(--transition);
          :hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  @media screen and (max-width: 679px) {
  }
  @media screen and (max-width: 429px) {
  }
`

export default Register
