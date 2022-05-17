import React from 'react'
import { BsAlt } from 'react-icons/bs'
import styled from 'styled-components'
const SearchPanel = () => {
  return (
    <Wrapper>
      <div className='search-box'>
        <h2 className='search-header'>
          Recent searches
          <span>
            <BsAlt />
          </span>
        </h2>
        <ul className='links'>
          <li>lionkslinks</li>
          <li>lionkslinks</li>
          <li>lionkslinks</li>
          <li>lionkslinks</li>
        </ul>
      </div>
      <div className='search-box'>
        <h2 className='search-header'>Ideas for you</h2>
        <ul className='links'>
          <li>
            <img src='' alt='alt' />
            <p>lionkslinks</p>
          </li>
          <li>
            <img src='' alt='alt' />
            <p>lionkslinks</p>
          </li>
          <li>
            <img src='' alt='alt' />
            <p>lionkslinks</p>
          </li>
          <li>
            <img src='' alt='alt' />
            <p>lionkslinks</p>
          </li>
          <li>
            <img src='' alt='alt' />
            <p>lionkslinks</p>
          </li>
        </ul>
      </div>

      <div className='search-box'>
        <h2 className='search-header'>Popular on Picstay</h2>
        <ul className='links'>
          <li>
            <img src='' alt='alt' />
            <p>lionkslinks</p>
          </li>
          <li>
            <img src='' alt='alt' />
            <p>lionkslinks</p>
          </li>
          <li>
            <img src='' alt='alt' />
            <p>lionkslinks</p>
          </li>
          <li>
            <img src='' alt='alt' />
            <p>lionkslinks</p>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: min(90%, 1000px);
  margin-inline: auto;
  /* border: 2px solid hotpink; */
  padding: 1em;
  box-shadow: var(--box-shadow-2);
  .search-box {
    margin: 0 0.5em;
    .search-header {
      margin-bottom: 1em;
      color: var(--black-2);
      font-weight: 400;
      font-size: 1.2em;
    }
    .links {
      margin-bottom: 1em;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-items: center;
      li {
        list-style: none;
        margin: 0.5em;
        padding: 0.5em 1em;
        background-color: var(--white-2);
        border-radius: 14px;
      }
    }
  }
`
export default SearchPanel
