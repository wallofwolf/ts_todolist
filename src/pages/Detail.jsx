import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Detail() {
  const navigate = useNavigate();
  const paramId = useParams().id;
  const todos = useSelector((state) => state.todos);
  const filteredTodo = todos.filter((item) => item.id === paramId);
  const todo = filteredTodo[0]

  return (
    <StyledDetailBox>
      <h3>상세보기</h3>
      제목 : {todo?.title} <br />
      내용 : {todo?.contents} <br />
      완료여부 : {todo.isDone.toString()} <br />
      <br />
      <button onClick={()=> {
        navigate('/')
      }}>이전 페이지로</button>
    </StyledDetailBox>
  );
}

export default Detail;

const StyledDetailBox = styled.div`
  background-color: lavender;
  padding: 20px;
`;
