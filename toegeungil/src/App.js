// import MainRouter from "./router/MainRouter";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoticeMain from "./public/pages/NoticeMain";
import NoticeView from './public/pages/NoticeView';

function App() {
  return (
    <>
      <h1>프로젝트 퇴근길</h1>
      <NoticeView/>
      <BrowserRouter>
      <Routes>
        <Route path='notice'>
          <Route index element={<NoticeMain/>}/>
          <Route path=':noticeNum' element={<NoticeView/>}/>
        </Route>
      </Routes>

      </BrowserRouter>
            {/* <Route exact path='/noticeView/:number' Component={NoticeView}/>
      <Route exact path='/' Component={NoticeMain}/> */}
      {/* <MainRouter/> */}
      {/* <NoticeMain/>
      <NoticeView/> */}
    </>
  );
}

export default App;