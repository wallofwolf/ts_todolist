import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { removeTodo, switchTodo } from '../modules/todos';

interface Iprops {
  isActive: boolean;
}

interface RootState {
  todos: [Itodos];
}

interface Itodos {
  id: string;
  contents: string;
  title: string;
  isDone: boolean;
}

function TodoList({ isActive }: Iprops) {
  // store에 있는 todos를 가지고 옴
  const todos = useSelector((state: RootState) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteButtonClick = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleSwitchButtonClick = (id: string) => {
    dispatch(switchTodo(id));
  };

  return (
    <StyledListBox>
      <h3>{isActive ? '할 일 목록' : '완료 목록'}</h3>
      {todos
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <StyledTodoBox key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.contents}</p>
              <p>{item.isDone.toString()}</p>
              <button onClick={() => handleSwitchButtonClick(item.id)}>
                {isActive ? '완료' : '취소'}
              </button>
              <button onClick={() => handleDeleteButtonClick(item.id)}>삭제</button>
              <br />
              <br />
              <button
                onClick={() => {
                  navigate(`/${item.id}`);
                }}>
                상세보기
              </button>
            </StyledTodoBox>
          );
        })}
    </StyledListBox>
  );
}

export default TodoList;

const StyledListBox = styled.div`
  background-color: orange;
  padding: 20px;
`;

const StyledTodoBox = styled.div`
  background-color: white;
  padding: 20px;
  margin: 10px;
  border-bottom: 1px solid orange;
`;
