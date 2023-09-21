// import MainRouter from "./router/MainRouter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoticeMain from "./public/notice/pages/NoticeMain";
import NoticeView from "./public/notice/pages/NoticeView";
import NoticeWrite from "./public/notice/pages/NoticeWrite";
import NoticeModify from "./public/notice/pages/NoticeModify";
import ServiceLayout from "./public/notice/layout/ServiceLayout";
import SocialMainCard from "./public/social/components/SocialMainCard";
import SocialParticipateList from "./public/social/components/componentAPI/SocialParticipateList";
import SocialPosting from "./public/social/components/SocialPosting";
import SocialMain from "./public/social/page/SocialMain";
import Layout from "./public/layout/Layout";
import SocialDetail from "./public/social/page/SocialDetail";
import CommunityDetail from "./public/community/pages/CommunityDetail";
import CommunityMain from "./public/community/pages/CommunityMain";
import CommunityRegist from "./public/community/pages/CommunityRegist";

import AllHobby from "./public/hobby/page/AllHobby";
import HobbyDetail from "./public/hobby/page/hobbyDetail";
import SocialWrite from './public/social/page/SocialWrite';
import ScrollToTop from './public/layout/scroll/ScrollToTop';
import HobbyWrite from "./public/tutor/page/hobbyWrite";
import HobbyModify from "./public/tutor/page/hobbyModify";
import LoginSignup from "./public/user/login/LoginSignup";
import Findpass from "./public/user/findpassword/Findpass";
import Signup from "./public/user/Signup/Signup";

// import PublicRouter from './public/qna/pages/QuestionMain';
import QuestionMain from "./public/qna/pages/QuestionMain";
import QuestionDetail from "./public/qna/pages/QuestionDetail";
import { AnswerMain } from "./public/qna/pages/AnswerMain";
import AnswerDetail from "./public/qna/pages/AnswerDetail";


function App() {
  /* 라우팅
      : 어떤 요청(URL)을 어디로 안내 및 매핑 할 것인지를 정해놓고 진행하는 것
      : 리액트에서는 요청에 따라 요청에 매핑되는 컴포넌트를 랜더링 한다. */
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* 로그인 */}
            <Route path="login" element={<LoginSignup />} />
            <Route path="findpass" element={<Findpass />} />
            <Route path="signup" element={<Signup />} />
            {/* 마이페이지 */}
            <Route path="mypage"></Route>
            {/* 취미 */}
            <Route path='hobby'>
              <Route index element={<AllHobby />} />
              <Route path=':hobbyCode' element={<HobbyDetail />} />
              <Route path='write' element={<HobbyWrite />} />
              <Route path='modify' element={<HobbyModify />} />
            </Route>
            {/* 소셜 */}
            <Route path="social">
              <Route index element={<SocialMain />} />
              <Route path=':socialNum' element={<SocialDetail />} />
              <Route path='write' element={<SocialWrite />} />
            </Route>
            {/* 커뮤니티 */}
            <Route path="/communitys" element={<CommunityMain />} />
            <Route
              path="/communitys/:communityNum"
              element={<CommunityDetail />}
            />
            <Route path="/communitys" element={<CommunityRegist />} />
            {/* 고객센터 */}
            <Route path="/service" element={<ServiceLayout />}>
              {/* 공지사항 */}
              <Route path="/service/notice">
                <Route index element={<NoticeMain />} />
                <Route path='otice/:noticeNum' element={<NoticeView />} />
                <Route path='notice/write' element={<NoticeWrite />} />
                <Route path='notice/:noticeNum/modify' element={<NoticeModify />} />
              </Route>
              <Route path="/service/qna">
                <Route index element={<QuestionMain />} />
                <Route path=":questionNum" element={<QuestionDetail />} />
                {/* <Route index  element={<AdminRouter />}/> */}
                {/* <Route path="admin" element={<AdminRouter />} /> */}
                {/* <Route path="public/main" element={<PublicRouter />} /> */}
              </Route>
              <Route path="answer">
                <Route index element={<AnswerMain />} />
                <Route path=":answerNum" element={<AnswerDetail />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;