import LoginSignup from "./public/user/login/LoginSignup";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Signup from "./public/user/Signup/Signup";
import MainRouter from "./router/MainRouter";

function App() {
  return (
    <>
  <h1>프로젝트 퇴근길</h1>
    {/* <MainRouter/> */}
    <BrowserRouter>
        <Routes>
            <Route path="sign" element={<Signup/>}/>  
            <Route path="signup" element={<LoginSignup/>}/>
        </Routes>
        </BrowserRouter>
  
    </>
  );
  
}

export default App;

