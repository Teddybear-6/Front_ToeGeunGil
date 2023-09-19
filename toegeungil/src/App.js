
// import MainRouter from "./router/MainRouter";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AllHobby from "./public/hobby/page/AllHobby";
import HobbyDetail from "./public/hobby/page/hobbyDetail";
import TestLogin from './public/hobby/components/testLogin';
import TutorNavber from './public/tutor/components/tutorHobbyNav';
import HobbyWrite from './public/tutor/page/hobbyWrite';
import HobbyModify from './public/tutor/page/hobbyModify';
import Tutor from './public/tutor/page/tutor';
function App() {
  return (
    <>
   <h1>프로젝트 퇴근길</h1>
  
 
   <BrowserRouter>
    <Routes>
      <Route index element={<TestLogin/>}></Route>
      <Route path='hobby'>
        <Route index element={<AllHobby/>}/>
        <Route path=':hobbyCode' element={<HobbyDetail/>}/>
        <Route path='write' element={<HobbyWrite/>}></Route>
        <Route path='modify' element={<Tutor/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
   
  

    </>
  );
}

export default App;

