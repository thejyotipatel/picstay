import styled from 'styled-components'
import { useState } from 'react'
import { Logo } from '.'
import { BsSearch } from 'react-icons/bs'
import {
  FaAlignLeft,
  FaUserCircle,
  FaCaretDown,
  FaCaretUp,
} from 'react-icons/fa'
const Header = () => {
  const [searchText, setSearchText] = useState('')

  const toggleSidebar = () => {}
  return (
    <Wrapper>
      <Logo />
      <form className='input-control'>
        <div className='search-icon'>
          <span>
            <BsSearch />
          </span>
        </div>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder='Search'
          name='search'
          className='search-input'
        />
        <button className='search-btn'>
          <span>
            <BsSearch />
          </span>
        </button>
      </form>
      <button className='profile-toggle-btn' onClick={toggleSidebar}>
        <span>
          <FaUserCircle />
        </span>
        <span>
          <FaCaretDown />
        </span>
      </button>
      <ul className='links'>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>fore</li>
      </ul>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  /* width: fit-content; */
  border: 2px solid hotpink;
  /* margin-inline: auto; */
  margin: 1em;

  display: flex;
  align-items: center;
  justify-content: center;
  .input-control {
    /* border: 2px solid hotpink; */
    border-radius: 18px;
    justify-content: center;
    align-items: center;
    background-color: var(--white-2);
    display: flex;
    width: 100%;
    margin: 0 0.5em;
    .search-icon {
      font-size: 1.5em;
      font-weight: 800;
      color: var(--black-2);
      /* cursor: pointer; */
      /* padding: 0.5em; */
      transform: translateX(0.5em);
      z-index: 1;
    }
    .search-btn {
      display: none;
      font-size: 1.5em;
      font-weight: 800;
      cursor: pointer;
      background-color: transparent;
      color: var(--black-1);
    }
    input {
      border-radius: 18px;
      background-color: transparent;
      color: var(--black-1);
      width: 100%;
      font-size: 1.2em;
      padding: 0.8em 1em;
      /* padding-left: 0; */
      z-index: 2;
    }
  }
  .profile-toggle-btn {
    margin: 0 0.5em;
    display: flex;
    font-weight: 600;
    font-size: 1.5em;
    cursor: pointer;
    background-color: transparent;
    span {
      margin: 0.2em;
    }
  }
  .links {
    display: none;
  }

  @media screen and (max-width: 500px) {
    .input-control {
      .search-input {
        display: none;
      }
      .search-btn {
        display: block;
      }
    }
  }
`
export default Header
