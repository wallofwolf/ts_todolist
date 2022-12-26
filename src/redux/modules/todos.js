import { v4 as uuidv4 } from 'uuid';

// 1. action items
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const SWITCH_TODO = 'SWITCH_TODO';

// 2. action creators
// addTodo를 export 왜? 다른 데서 써야 됨
// 여기서 만든 객체가 디스패치로 들어가면서
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// 3. initial State (for reducer)
const initialState = [
  {
    id: uuidv4(),
    title: '제목1',
    contents: '내용1',
    isDone: false,
  },
  {
    id: uuidv4(),
    title: '제목2',
    contents: '내용2',
    isDone: true,
  },
  {
    id: uuidv4(),
    title: '제목3',
    contents: '내용3',
    isDone: false,
  },
];

// 4. reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

// 5. reducer를 export
export default todos;
