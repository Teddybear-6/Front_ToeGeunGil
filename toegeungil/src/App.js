<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityMain from "./public/community/pages/CommunityMain";
import CommunityRegist from "./public/community/pages/CommunityRegist";
import CommunityDetail from "./public/community/pages/CommunityDetail";
=======
// import MainRouter from "./router/MainRouter";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SocialMainCard from "./public/social/components/SocialMainCard";
import SocialParticipateList from "./public/social/components/componentAPI/SocialParticipateList";
import SocialPosting from './public/social/components/SocialPosting';
import TestLogin from './public/social/components/TestLogin';
import SocialMain from './public/social/page/SocialMain';
import Layout from './public/layout/Layout';
import SocialDetail from './public/social/page/SocialDetail';
>>>>>>> a8b2d2ecf3d3070e0fd66851f1989c3b31193c71

function App() {
  /* 라우팅
      : 어떤 요청(URL)을 어디로 안내 및 매핑 할 것인지를 정해놓고 진행하는 것
      : 리액트에서는 요청에 따라 요청에 매핑되는 컴포넌트를 랜더링 한다. */
  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/communitys" element={<CommunityMain/>}/>
        <Route path="/communitys/:communityNum" element={<CommunityDetail/>} />
        <Route path="/communitys" element={<CommunityRegist/>}/>
      </Routes>
    </BrowserRouter>
=======
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* 로그인 */}
            <Route path='login'>
            </Route>
            {/* 마이페이지 */}
            <Route path='mypage'>
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
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
>>>>>>> a8b2d2ecf3d3070e0fd66851f1989c3b31193c71
  );
}

export default App;
