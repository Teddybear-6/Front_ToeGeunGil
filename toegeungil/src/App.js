// import MainRouter from "./router/MainRouter";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoticeMain from "./public/pages/NoticeMain";
import NoticeView from './public/pages/NoticeView';
import NoticeWrite from "./public/pages/NoticeWrite";
import TestLogin from './public/components/testLogin';

function App() {
  return (
    <BrowserRouter>
      <>
        <h1>프로젝트 퇴근길</h1>
        <Routes>
          <Route path='/' element={<TestLogin/>}/>
          <Route path='/notice' element={<NoticeMain/>}/>
          <Route path='/notice/:noticeNum' element={<NoticeView/>}/>
          {/* <Route path='/notice/write' element={<NoticeView/>}/> */}
          <Route path='/notice/write' element={<NoticeWrite/>}/>
        </Routes>
      </>
    </BrowserRouter>

  );
}

export default App;