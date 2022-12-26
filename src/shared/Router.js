import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Header from '../redux/components/Header';

// 라우터 만들기
const Router = () => {
  return (
    <BrowserRouter>
      {/* 여기 헤더를 두면 어느 페이즈를 가든 떠 있다! */}
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/:id'
          element={<Detail />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
