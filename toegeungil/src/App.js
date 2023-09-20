// import MainRouter from "./router/MainRouter";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoticeMain from "./public/pages/NoticeMain";
import NoticeView from './public/pages/NoticeView';
import NoticeWrite from "./public/pages/NoticeWrite";
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
import TutorHobbyList from './public/tutor/page/tutorHobbyList';
import LoginSignup from './public/user/login/LoginSignup';
import Findpass from './public/user/findpassword/Findpass';
import Signup from './public/user/Signup/Signup';
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
            <Route path='mypage'>
            </Route>
            {/* 취미 */}
            <Route path='hobby'>
            <Route index  element={<AllHobby/>} />
            <Route path=':hobbyCode' element={<HobbyDetail />} />
            <Route path='write' element={<HobbyWrite />} />
            <Route path='modify' element={<HobbyModify />} />
            <Route path='tutorlist' element={<TutorHobbyList />} />
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