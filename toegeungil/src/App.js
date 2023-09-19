import LoginSignup from "./public/user/login/LoginSignup";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Signup from "./public/user/Signup/Signup";
// import Findpass from "./public/user/findpassword/Findpass";
import MainRouter from "./router/MainRouter";
import TestLogin from "./public/user/login/TestLogin";
import Findpass from "./public/user/findpassword/Findpass";
import Main from "./public/user/main/Main";
import Mypage from "./public/user/mypage/Mypage";


function App() {
  return (
    <>
      <h1>프로젝트 퇴근길</h1>
      <BrowserRouter>
        <Routes>
        {/* <Route path="/" element = {<MainRouter/>}/> */}
            {/* <Route index element={<MainRouter/>}/>   */}
            <Route path="login" element={<LoginSignup/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="main" element={<Main/>}/>
            <Route path="mypage" element={<Mypage/>}/>
            <Route path="findpass" element={<Findpass/>}/>
        <Route path="TestLogin" element={<TestLogin/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

export default App;

