import LoginSignup from "./public/user/login/LoginSignup";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Signup from "./public/user/Signup/Signup";
// import Findpass from "./public/user/findpassword/Findpass";
import MainRouter from "./router/MainRouter";

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
            {/* <Route path="findpass" element={<Findpass/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
  
}

export default App;

