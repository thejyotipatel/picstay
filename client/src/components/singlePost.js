import { BsDownload, BsLink } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'

import { FaCaretDown } from 'react-icons/fa'
import styled from 'styled-components'
import image from '../utils/image.png'
const SinglePost = () => {
  return (
    <Wrapper>
      <div className='single-img'>
        <img src={image} alt='images.jpg' />
      </div>
      <div className='desc'>
        <header>
          <div className='left'>
            <span className='dots'>
              <GoPrimitiveDot /> <GoPrimitiveDot /> <GoPrimitiveDot />
            </span>
            <span>
              <BsDownload />
            </span>
            <span>
              <BsLink />
            </span>
          </div>
          <div className='right'>
            <p className='username'>
              username
              <span>
                <FaCaretDown />
              </span>
            </p>

            <button className='save'>save</button>
          </div>
        </header>
        <div className='deatils'>
          <a href=''>idoho-x.com</a>
          <h1>topic name of this singlr post write here</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, vel
            eos necessitatibus officia, voluptatum a veniam sapiente
            consequuntur eveniet totam nostrum, quam commodi quia inventore
            dolor ut? Inventore, laborum dicta.
            <button>...more</button>
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: min(90%, 1000px);
  border: 2px solid hotpink;
  margin-inline: auto;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 50% 50%;

  .single-img {
    /* width: 50%; */
    max-width: 500px;
    margin: 1em;
    img {
      width: 100%;
    }
  }
  .desc {
    header {
      margin: 1em;
      display: flex;

      justify-content: space-between;
      color: var(--black-1);
      .left {
        margin: 0.5em;
        span {
          font-size: 1.5em;
          font-weight: 900;
          margin: 0 0.5em;
        }
        .dots {
          margin-top: 0.8em;
          display: flex;
          font-size: 0.6em;
        }
      }
      .right,
      .left {
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .username {
          text-transform: capitalize;
          font-weight: 600;
          margin: 0.5em 0;
        }
        .save {
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
    }
    .deatils {
      a {
        /* text-decoration: none; */
        color: var(--black-1);
      }
      h1 {
        margin: 0.5em 0;
        word-spacing: 0.2em;
        line-height: 1.2em;
        /* max-width: 50%; */
      }
      p {
        margin: 0.5em 0;
        word-spacing: 0.2em;
        line-height: 1.5em;
        /* max-width: 50%; */
      }
    }
  }
`
export default SinglePost
