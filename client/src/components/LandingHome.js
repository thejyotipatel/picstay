import { GoPrimitiveDot } from 'react-icons/go'
import { FaChevronDown } from 'react-icons/fa'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'

const LandingHome = () => {
  const [images, setImages] = useState([])
  const getImages = async (pageNumber) => {
    try {
      let response = await axios.get(
        `https://picsum.photos/v2/list?page=${pageNumber}&limit=5`
      )
      setImages(response.data)
      console.log(images)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getImages(1)
  }, [])

  return (
    <Wrapper color={'var(--red-1)'}>
      <div className='header'>
        <h1 className='text-1'>Get your next</h1>
        <h1 className='text-2'>home decor idea</h1>

        <div className='sliter-btn'>
          <button className='btn-dot active'>
            <GoPrimitiveDot />
          </button>
          <button className='btn-dot'>
            <GoPrimitiveDot />
          </button>
          <button className='btn-dot'>
            <GoPrimitiveDot />
          </button>
          <button className='btn-dot'>
            <GoPrimitiveDot />
          </button>
        </div>
      </div>
      <button className='scroll-btn'>
        <FaChevronDown />
      </button>
      <div className='bg-img'>
        {images.map((item) => {
          const { id, download_url, author } = item
          return <img src={download_url} key={id} alt={author} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  justify-items: center;
  position: relative;
  height: calc(100vh - 65px);
  overflow: hidden;
  .bg-img {
    z-index: -1;
    position: absolute;

    margin: auto;
    bottom: 0;
    display: flex;
    align-items: center;
    gap: 1em;
    margin-left: -100px;

    img {
      max-width: 300px;
      width: 100%;
      border-radius: 12px 12px 0 0;
    }
  }
  .header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1 {
      margin: 0.5em 0;
      font-size: 3em;
      text-align: center;
      font-weight: 600;
      line-height: var(--lineHeight-p);
      word-spacing: 0.2em;
      :nth-child(2) {
        color: violet;
        margin: 0.2em 0;
      }
    }

    .sliter-btn {
      margin: 2em 0 0;
      display: flex;
      align-items: center;
      .btn-dot {
        display: flex;
        background-color: transparent;
        margin: 0.5em;
        cursor: pointer;
        padding: 0;
        /* border: 1px solid hotpink; */
        font-size: var(--font-size-4);
        font-weight: 900;
        color: var(--black-4);
        svg {
          width: 10px;
        }
      }
      .active {
        color: ${(props) => props.color};
      }
    }
  }
  .scroll-btn {
    display: flex;
    justify-content: center;
    background-color: transparent;
    margin: 70% 0 0 0;
    cursor: pointer;
    width: fit-content;
    background-color: var(--red-1);
    padding: 0.2em;
    border-radius: 50%;
    /* border: 1px solid hotpink; */
    font-size: var(--font-size-6);
    font-weight: 900;
    color: var(--black-4);
  }

  .scroll-btn {
    animation: anime 2s infinite;
  }

  @keyframes anime {
    0%,
    100% {
      transform: translate(0, -50);
    }

    50% {
      transform: translate(0, 25px);
    }
  }

  @media screen and (max-width: 679px) {
    .header .scroll-btn {
      margin: 50% 0 0 0;
    }
  }
  @media screen and (max-width: 679px) {
    .header h1 {
      font-size: 2em;
    }
  }
`
export default LandingHome
