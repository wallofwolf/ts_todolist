import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todos from '../modules/todos';

// 1. rootRudecer를 만든다
// modules 폴더에 있는 파일들이 리듀서를 반환하니까 그걸 모아주는 거지
const rootReducer = combineReducers({
  todos,
});

// 2. 이걸 이용해 store를 만든다
const store = createStore(rootReducer);

// 3. export 해서 다른 파일에서 import 할 수 있게 한다

export default store;
