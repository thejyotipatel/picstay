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
      <nav>
        <Logo />
        <form className='input-control'>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder='input'
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
        </button>
        <ul className='links'>
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>fore</li>
        </ul>

        <div className='links'></div>
      </nav>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: min(90%, 1000px);
  border: 2px solid hotpink;
  margin-inline: auto;
  margin: 1em;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .input-control {
      /* border: 2px solid hotpink; */
      border-radius: 18px;
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
        background-color: var(--white-2);
        color: var(--black-1);
        width: 100%;
        font-size: 1.2em;
        padding: 0.8em 1em;
      }
    }
  }

  @media screen and (max-width: 500px) {
    nav {
      .input-control {
        .search-input {
          display: none;
        }
        .search-btn {
          display: block;
        }
      }
    }
  }
`
export default Header
