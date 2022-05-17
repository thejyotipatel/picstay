import React from 'react'
import styled from 'styled-components'
const HomeSinglePost = ({ ImgUrl }) => {
  return (
    <Wrapper>
      <header>
        copy icon
        <p>
          user name <span>down icon</span>
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
  width: min(90%, 1000px);
  border: 2px solid hotpink;
  margin-inline: auto;
  margin: 1em;
`
export default HomeSinglePost
