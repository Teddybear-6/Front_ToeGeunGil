// import MainRouter from "./router/MainRouter";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoticeMain from './public/notice/pages/NoticeMain';
import NoticeView from './public/notice/pages/NoticeView';
import NoticeWrite from './public/notice/pages/NoticeWrite';
import SocialMainCard from "./public/social/components/SocialMainCard";
import SocialParticipateList from "./public/social/components/componentAPI/SocialParticipateList";
import SocialPosting from './public/social/components/SocialPosting';
import SocialMain from './public/social/page/SocialMain';
import Layout from './public/layout/Layout';
import SocialDetail from './public/social/page/SocialDetail';
import CommunityDetail from './public/community/pages/CommunityDetail';
import CommunityMain from './public/community/pages/CommunityMain';
import CommunityRegist from './public/community/pages/CommunityRegist';

import AllHobby from "./public/hobby/page/AllHobby";
import HobbyDetail from "./public/hobby/page/hobbyDetail";
import HobbyWrite from './public/tutor/page/hobbyWrite';
import HobbyModify from './public/tutor/page/hobbyModify';
import LoginSignup from './public/user/login/LoginSignup';
import Findpass from './public/user/findpassword/Findpass';
import Signup from './public/user/Signup/Signup';


import PublicRouter from './public/qna/component/QuestionMain';
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
            <Route path='login' element={<LoginSignup />} />
            <Route path='findpass' element={<Findpass />} />
            <Route path='signup' element={<Signup />} />
            {/* 마이페이지 */}
            <Route path='mypage'>
            </Route>
            {/* 취미 */}
            <Route path='hobby'>
              <Route index element={<AllHobby />} />
              <Route path=':hobbyCode' element={<HobbyDetail />} />
              <Route path='write' element={<HobbyWrite />} />
              <Route path='modify' element={<HobbyModify />} />
            </Route>
            {/* 소셜 */}
            <Route path='social'>
              <Route index element={<SocialMain />} />
              <Route path=':socialNum' element={<SocialDetail />} />
            </Route>
            {/* 커뮤니티 */}
            <Route path="/communitys" element={<CommunityMain />} />
            <Route path="/communitys/:communityNum" element={<CommunityDetail />} />
            <Route path="/communitys" element={<CommunityRegist />} />
            {/* 고객센터 */}
            <Route path="notice">
              <Route index element={<NoticeMain />} />
              <Route path='/notice/:noticeNum' element={<NoticeView />} />
              <Route path='/notice/write' element={<NoticeWrite />} />
            </Route>
            <Route path="qna"/>
            {/* <Route index  element={<AdminRouter />}/>
                <Route path="admin" element={<AdminRouter />} />
                <Route path="answer" element={<AdminAnswer/>}/> */}
                <Route path="public/main" element={<PublicRouter />} />
              {/* <Route path="qna" element={<QnaRouter />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;