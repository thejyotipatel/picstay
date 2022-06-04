import styled from 'styled-components'
import HomeSinglePost from './homeSinglePost'
import image from '../utils/image.png'
const RelatedPost = () => {
  return (
    <Wrapper>
      <h3>More like this</h3>
      <div className='posts'>
        <HomeSinglePost ImgUrl={image} />
        <HomeSinglePost ImgUrl={image} />
        <HomeSinglePost ImgUrl={image} />
        <HomeSinglePost ImgUrl={image} />
        <HomeSinglePost ImgUrl={image} />
        <HomeSinglePost ImgUrl={image} />
        <HomeSinglePost ImgUrl={image} />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: min(98%, 1800px);
  margin-inline: auto;
  /* margin: 1em; */
  h3 {
    text-align: center;
    margin: 1em 0;
  }
  .posts {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5em;
  }
  @media screen and (max-width: 1200px) {
    .posts {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media screen and (max-width: 1000px) {
    .posts {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 700px) {
    .posts {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 500px) {
    .posts {
      grid-template-columns: repeat(1, 1fr);
      gap: 1em;
    }
  }
`
export default RelatedPost
