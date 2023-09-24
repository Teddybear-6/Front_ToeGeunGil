// import MainRouter from "./router/MainRouter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoticeMain from "./public/notice/pages/NoticeMain";
import NoticeView from "./public/notice/pages/NoticeView";
import NoticeWrite from "./public/notice/pages/NoticeWrite";
import NoticeModify from "./public/notice/pages/NoticeModify";
import ServiceLayout from "./public/notice/layout/ServiceLayout";
// import SocialMainCard from "./public/social/components/SocialMainCard";
// import SocialParticipateList from "./public/social/components/componentAPI/SocialParticipateList";
import CommunityDetail from "./public/community/pages/CommunityDetail";
import CommunityMain from "./public/community/pages/CommunityMain";
import CommunityWrite from "./public/community/pages/CommunityWrite";
import LoginSignup from "./public/user/login/LoginSignup";
import Findpass from "./public/user/findpassword/Findpass";
import Signup from "./public/user/Signup/Signup";
import CommunityModify from "./public/community/components/CommunityModify";

import Mypage from "./public/user/mypage/Mypage";
import SocialMain from "./public/social/page/SocialMain";
import Layout from "./public/layout/Layout";
import SocialDetail from "./public/social/page/SocialDetail";

import AllHobby from "./public/hobby/page/AllHobby";
import HobbyDetail from "./public/hobby/page/hobbyDetail";
import SocialWrite from "./public/social/page/SocialWrite";
import TutorHobbyList from "./public/tutor/page/tutorHobbyList";
import ScrollToTop from "./public/layout/scroll/ScrollToTop";
import HobbyWrite from "./public/tutor/page/hobbyWrite";
import TutorLayout from "./public/tutor/layouts/tutorLayout";
import StudentList from "./public/tutor/components/studentList";
import HobbyModify from "./public/tutor/page/hobbyModify";

// import PublicRouter from './public/qna/pages/QuestionMain';
import QuestionMain from "./public/qna/pages/QuestionMain";
import QuestionDetail from "./public/qna/pages/QuestionDetail";
import QuestionWrite from "./public/qna/pages/QuestionWrite";
import { AnswerMain } from "./public/qna/pages/AnswerMain";
import AnswerDetail from "./public/qna/pages/AnswerDetail";
import LocalMain from "./public/local/pages/LocalMain";
import LocalWrite from "./public/local/pages/LocalWrite";
import LocalModify from "./public/local/pages/LocalModify";
import SocialModify from "./public/social/page/SocialModify";
import AnswerWrite from "./public/qna/pages/AnswerWrite";
import HobbyLayout from "./public/hobby/layout/HoobyLayout";
import CategoryHobby from "./public/hobby/page/CategoryHobby";
import HobbySearch from "./public/hobby/page/HobbySearch";
import CategoryMain from "./public/category/pages/categoryMain";
import CategoryWrite from "./public/category/pages/CategoryWrite";
import CategoryModify from "./public/category/pages/CategoryModify";
import React, { useState } from "react";
function App() {
  /* 라우팅
      : 어떤 요청(URL)을 어디로 안내 및 매핑 할 것인지를 정해놓고 진행하는 것
      : 리액트에서는 요청에 따라 요청에 매핑되는 컴포넌트를 랜더링 한다. */
  const [login, setLogin] = useState(false);
  return (

    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout login={login} setLogin={setLogin} />}>
          {/* 로그인 */}
          <Route path="login" element={<LoginSignup setLogin={setLogin} />} />
          <Route path="findpass" element={<Findpass />} />
          <Route path="signup" element={<Signup />} />
          {/* 마이페이지 */}
          <Route path="mypage" element={<Mypage />}>
            {/* <Route index element={<Mypage/>}/> */}
          </Route>
          {/* 취미 */}
          <Route element={<HobbyLayout />}>
            <Route path='/hobby' element={<AllHobby />} />
            <Route path='hobby/:hobbyCode' element={<HobbyDetail />} />
            <Route path="/hobbycategory/:categoryCode" element={<CategoryHobby />} />
            <Route path="/hobby/search" element={<HobbySearch />} />
          </Route>



          <Route element={<TutorLayout />}>
            <Route path="/tutor" element={<TutorHobbyList />} />
            <Route path="/hobbywrite" element={<HobbyWrite />} />
            <Route path="/hobbymodify" element={<HobbyModify />} />
            <Route path="/hobbystudent" element={<StudentList />} />
          </Route>
          {/* 소셜 */}
          <Route path="social">
            <Route index element={<SocialMain />} />
            <Route path=":socialNum" element={<SocialDetail />} />
            <Route path="write" element={<SocialWrite />} />
            <Route path="modify" element={<SocialModify />} />
          </Route>
          {/* 커뮤니티 */}
          <Route path="/communitys" element={<CommunityMain />} />
          <Route
            path="/communitys/:communityNum"
            element={<CommunityDetail />}
          />
          <Route
            path="/communitys/:communityNum"
            element={<CommunityDetail />}
          />
          <Route path="/communitys/write" element={<CommunityWrite />} />
          <Route path="/communitys/modify" element={<CommunityModify />} />

          {/* 고객센터 */}
          <Route path="/service" element={<ServiceLayout />}>
            <Route index element={<NoticeMain />} />
            {/* 공지사항 */}
            <Route path="/service/notice">
              <Route index element={<NoticeMain />} />
              <Route
                path="/service/notice/:noticeNum"
                element={<NoticeView />}
              />
              <Route path="/service/notice/write" element={<NoticeWrite />} />
              <Route
                path="/service/notice/:noticeNum/modify"
                element={<NoticeModify />}
              />
            </Route>
            {/* QnA */}
            <Route path="/service/qna">
              <Route path="/service/qna" element={<QuestionMain />} />
              <Route path=":questionNum" element={<QuestionDetail />} />
              <Route path="/service/qna/write" element={<QuestionWrite />} />
              {/* <Route index  element={<AdminRouter />}/> */}
              {/* <Route path="admin" element={<AdminRouter />} /> */}
              {/* <Route path="public/main" element={<PublicRouter />} /> */}
            </Route>

            <Route path="/service/answer">
              <Route index element={<AnswerMain />} />
              <Route
                path="/service/answer/:answerNum"
                element={<AnswerDetail />}
              />
              <Route path="/service/answer/write" element={<AnswerWrite />} />
            </Route>
            {/* Local */}
            <Route path="/service/local">
              <Route path="/service/local" element={<LocalMain />} />
              <Route path="/service/local/write" element={<LocalWrite />} />
              <Route path="/service/local/:localCode/modify" element={<LocalModify />} />
            </Route>
            {/* Category */}
            <Route path="/service/category">
              <Route path="/service/category" element={<CategoryMain />} />
              <Route path="/service/category/write" element={<CategoryWrite />} />
              <Route path="/service/category/:categoryCode/modify" element={<CategoryModify />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
