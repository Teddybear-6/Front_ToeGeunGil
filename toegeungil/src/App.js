// import MainRouter from "./router/MainRouter";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SocialMainCard from "./public/social/components/SocialMainCard";
import SocialParticipateList from "./public/social/components/componentAPI/SocialParticipateList";
import SocialDetails from "./public/social/components/SocialDetails";
import SocialPosting from './public/social/components/SocialPosting';
import TestLogin from './public/social/components/TestLogin';

function App() {
  /* 라우팅
      : 어떤 요청(URL)을 어디로 안내 및 매핑 할 것인지를 정해놓고 진행하는 것
      : 리액트에서는 요청에 따라 요청에 매핑되는 컴포넌트를 랜더링 한다. */
  return (
    <>
      <h1>프로젝트 퇴근길</h1>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<SocialMainCard/>} />
            <Route path=':socialNum' element={<SocialDetails/>} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      {/* <TestLogin/> */}
      <SocialPosting/>
    </>
  );
}

export default App;
