import React from 'react'
import { BsArrowDown, BsDownload, BsLink } from 'react-icons/bs'
import styled from 'styled-components'
const SinglePost = () => {
  return (
    <Wrapper>
      <header>
        <div className='left'>
          <span>
            <BsDownload />
          </span>
          <span>
            <BsLink />
          </span>
        </div>
        <div className='right'>
          <p className='username'>username</p>
          <span>
            <BsArrowDown />
          </span>
          <span>
            <BsLink />
          </span>
        </div>
      </header>
    </Wrapper>
  )
}
const Wrapper = styled.div``
export default SinglePost
