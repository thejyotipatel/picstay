import styled from 'styled-components'
import HomeSinglePost from './homeSinglePost'
import image from '../utils/image.png'
const RelatedPost = () => {
  return (
    <Wrapper>
      <h3>more linke this</h3>
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
  width: min(90%, 1400px);
  border: 2px solid hotpink;
  margin-inline: auto;
  /* margin: 1em; */
  .posts {
    display: flex;
    flex-wrap: wrap;
  }
`
export default RelatedPost
