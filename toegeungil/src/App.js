// import MainRouter from "./router/MainRouter";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoticeMain from "./public/pages/NoticeMain";
import NoticeView from './public/pages/NoticeView';
import NoticeWrite from "./public/pages/NoticeWrite";
import TestLogin from './public/components/testLogin';
import SocialMainCard from "./public/social/components/SocialMainCard";
import SocialParticipateList from "./public/social/components/componentAPI/SocialParticipateList";
import SocialPosting from './public/social/components/SocialPosting';
import SocialMain from './public/social/page/SocialMain';
import Layout from './public/layout/Layout';
import SocialDetail from './public/social/page/SocialDetail';
import CommunityDetail from './public/community/pages/CommunityDetail';
import CommunityMain from './public/community/pages/CommunityMain';
import CommunityRegist from './public/community/pages/CommunityRegist';
import LoginSignup from './public/user/login/LoginSignup';
import Findpass from './public/user/findpassword/Findpass';
import Signup from './public/user/Signup/Signup';
import Mypage from './public/user/mypage/Mypage';

import AllHobby from "./public/hobby/page/AllHobby";
import HobbyDetail from "./public/hobby/page/hobbyDetail";

import TutorNavber from './public/tutor/components/tutorHobbyNav';
import HobbyWrite from './public/tutor/page/hobbyWrite';
import HobbyModify from './public/tutor/page/hobbyModify';
import Tutor from './public/tutor/page/tutor';
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
            <Route path='login' element={<LoginSignup/>} />
            <Route path='findpass' element={<Findpass/>} />
            <Route path='signup' element={<Signup/>} />
            {/* 마이페이지 */}
            <Route path='mypage' element={<Mypage/>}>
            </Route>
            {/* 취미 */}
            <Route path='hobby'>
            <Route index  element={<AllHobby/>} />
            <Route path=':hobbyCode' element={<HobbyDetail />} />
            <Route path='write' element={<HobbyWrite />} />
            <Route path='modify' element={<HobbyModify />} />
            </Route>
            {/* 소셜 */}
            <Route path='social'>
                <Route index  element={<SocialMain/>} />  
              <Route path=':socialNum' element={<SocialDetail />} />
            </Route>
            {/* 커뮤니티 */}
            <Route path="/communitys" element={<CommunityMain/>}/>
            <Route path="/communitys/:communityNum" element={<CommunityDetail/>} />
            <Route path="/communitys" element={<CommunityRegist/>}/>
            {/* 고객센터 */}
            <Route path='notice'>
              {/* <Route path='/' element={<TestLogin />} /> */}
              <Route index element={<NoticeMain />} />
              {/* <Route path='/notice' element={<NoticeMain />} /> */}
              <Route path='/notice/:noticeNum' element={<NoticeView />} />
              {/* <Route path='/notice/write' element={<NoticeView/>}/> */}
              <Route path='/notice/write' element={<NoticeWrite />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

export default App;