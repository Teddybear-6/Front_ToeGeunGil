// import MainRouter from "./router/MainRouter";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoticeMain from "./public/pages/NoticeMain";
import NoticeView from './public/pages/NoticeView';
import NoticeWrite from "./public/pages/NoticeWrite";
import TestLogin from './public/components/testLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SocialMainCard from "./public/social/components/SocialMainCard";
import SocialParticipateList from "./public/social/components/componentAPI/SocialParticipateList";
import SocialPosting from './public/social/components/SocialPosting';
import TestLogin from './public/social/components/TestLogin';
import SocialMain from './public/social/page/SocialMain';
import Layout from './public/layout/Layout';
import SocialDetail from './public/social/page/SocialDetail';

function App() {
  /* 라우팅
      : 어떤 요청(URL)을 어디로 안내 및 매핑 할 것인지를 정해놓고 진행하는 것
      : 리액트에서는 요청에 따라 요청에 매핑되는 컴포넌트를 랜더링 한다. */
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* 로그인 */}
            <Route path='login'>
            </Route>
            {/* 취미 */}
            <Route path='hobby'>
            </Route>
            {/* 소셜 */}
            <Route path='social'>
              <Route index element={<SocialMain/>} />
              <Route path=':socialNum' element={<SocialDetail />} />
            </Route>
            {/* 커뮤니티 */}
            <Route path='community'>
            </Route>
            {/* 고객센터 */}
            <Route path='service'>
            <Route path='/' element={<TestLogin/>}/>
          <Route path='/notice' element={<NoticeMain/>}/>
          <Route path='/notice/:noticeNum' element={<NoticeView/>}/>
          {/* <Route path='/notice/write' element={<NoticeView/>}/> */}
          <Route path='/notice/write' element={<NoticeWrite/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
