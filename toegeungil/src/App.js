// import MainRouter from "./router/MainRouter";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoticeMain from "./public/pages/NoticeMain";
import NoticeView from './public/pages/NoticeView';

function App() {
  return (
    <BrowserRouter>
      <>
        <h1>프로젝트 퇴근길</h1>
        <Routes>
          <Route path='/notice' element={<NoticeMain/>}/>
          <Route path='/notice/:noticeNum' element={<NoticeView/>}/>
        </Routes>
      </>
      {/* <MainRouter/> */ }
    </BrowserRouter>

  );
}

export default App;