// import MainRouter from "./router/MainRouter";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminRouter from './admin/components/AdminMain';

function App() {
  /* 라우팅
      : 어떤 요청(URL)을 어디로 안내 및 매핑 할 것인지를 정해놓고 진행하는 것
      : 리액트에서는 요청에 따라 요청에 매핑되는 컴포넌트를 랜더링 한다. */
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<AdminRouter />} />
                {/* <Route path="admin" element={<AdminRouter />} />
                <Route path="answer" element={<AdminAnswer/>}/>
                <Route path="public" element={<PublicRouter />} />
                <Route path="qna" element={<QnaRouter />} /> */}
        </Routes>
      </BrowserRouter>

      
    </>
  );
  
}

export default App;