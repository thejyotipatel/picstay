import { GoPrimitiveDot } from 'react-icons/go'
import { MdNorthEast, MdOutlineFileUpload } from 'react-icons/md'
import { BiChevronDown } from 'react-icons/bi'

import styled from 'styled-components'
const HomeSinglePost = ({ ImgUrl }) => {
  return (
    <Wrapper>
      <header>
        <button className='username-btn'>
          username
          <span>
            <BiChevronDown />
          </span>
        </button>
        <button className='save-btn'>save</button>
      </header>
      <img src={ImgUrl} alt='imgeas.jpg' />
      <footer>
        <a href=''>
          <span>
            <MdNorthEast />
          </span>
          linksexample.com
        </a>
        <button className='uploade-btn'>
          <span>
            <MdOutlineFileUpload />
          </span>
        </button>
        <button className='dots'>
          <span>
            <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot />
          </span>
        </button>
      </footer>
      <div className='user-desc'>
        <h3>Eye oil painting</h3>
        <div className='profile'>
          <img src={ImgUrl} alt='profile pic' />
          <p className='username'>Username</p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: min(90%, 280px);
  height: fit-content;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  position: relative;
  header {
    margin-top: 0;
    display: flex;
    position: absolute;
    top: 1em;
    width: 100%;
    justify-content: space-around;
    .username-btn,
    .save-btn {
      font-weight: 600;
      font-size: 1.1em;
      background-color: transparent;
      color: var(--white-1);
      text-transform: capitalize;
    }
    .save-btn {
      margin: 0 0.5em;
      padding: 0.8em;
      background-color: var(--red-1);
      border-radius: 25px;
      box-shadow: var(--box-shadow-4);
    }
  }
  img {
    width: 100%;
    border-radius: 16px;
  }
  footer {
    transform: translateY(-2.5em);
    display: flex;
    width: 100%;
    justify-content: space-around;
    .uploade-btn,
    .dots {
      background-color: var(--white-1);
      border-radius: 50%;
      color: var(--black-2);
      text-transform: capitalize;
      width: 30px;
      height: 30px;
      box-shadow: var(--box-shadow-4);
    }
    a {
      color: var(--black-2);
      padding: 0.5em;
      background-color: var(--white-1);
      border-radius: 20px;
      text-decoration: none;
      box-shadow: var(--box-shadow-4);
    }
    .dots {
      span {
        font-size: 0.6em;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .uploade-btn {
      span {
        font-weight: 800;
        font-size: 1.8em;
      }
    }
  }
  .user-desc {
    margin: -10% 0 0 -40%;

    .profile {
      display: flex;
      margin: 0.5em 0;
      img {
        width: 30px;
        height: 30px;
      }
      .username {
        font-size: 0.8em;
        font-weight: 500;
        margin-left: 0.2em;
      }
    }
  }
`
export default HomeSinglePost
