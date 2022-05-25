import styled from 'styled-components'
import { FaPlus, FaQuestion } from 'react-icons/fa'
const UploadePost = () => {
  return (
    <Wrapper>
      <button className='add-btn'>
        <span>
          <FaPlus />
        </span>
      </button>
      <button className='question-btn'>
        <span>
          <FaQuestion />
        </span>
      </button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: fit-content;

  .add-btn,
  .question-btn {
    top: 70%;
    right: 0;
    /* margin: 0.5em; */
    border-radius: 100%;
    background-color: var(--white-1);
    position: fixed;
    /* border: 2px solid hotpink; */
    color: var(--black-2);
    padding: 18px;
    font-weight: 600;
    font-size: 1.3em;
    margin-right: 4em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  .question-btn {
    margin-top: 3.5em;
  }
`
export default UploadePost
