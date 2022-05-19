import React from 'react'
import { FaCaretDown } from 'react-icons/fa'

import styled from 'styled-components'
const HomeSinglePost = ({ ImgUrl }) => {
  return (
    <Wrapper>
      <header>
        copy icon
        <p>
          username
          <span>
            <FaCaretDown />
          </span>
        </p>
        <button>save</button>
      </header>
      <img src={ImgUrl} alt='imgeas.jpg' />
      <footer>
        <a href=''> links</a>
        <p>download icon</p>
        <p>...</p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: min(90%, 280px);
  height: fit-content;
  border: 2px solid hotpink;
  margin-inline: auto;
  /* margin: 1em; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  position: relative;
  /* margin: 0 0.2em; */
  header {
    /* transform: translateY(1em); */
    margin-top: 0;
    display: flex;
    position: absolute;
    width: 100%;
    justify-content: space-around;
    button {
      margin: 0 0.5em;
      padding: 0.8em;
      font-weight: 600;
      font-size: 1.1em;
      background-color: var(--red-1);
      color: var(--white-1);
      text-transform: capitalize;
      border-radius: 25px;
    }
  }
  img {
    width: 100%;
  }
  footer {
    transform: translateY(-2.5em);
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`
export default HomeSinglePost
