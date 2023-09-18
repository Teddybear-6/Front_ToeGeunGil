
// import MainRouter from "./router/MainRouter";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AllHobby from "./public/hobby/page/AllHobby";
import HobbyDetail from "./public/hobby/page/hobbyDetail";
import TestLogin from './public/hobby/components/testLogin';
function App() {
  return (
    <>
   <h1>프로젝트 퇴근길</h1>
   {/* <TestLogin></TestLogin> */}
 
   <BrowserRouter>
    <Routes>
      <Route index element={<TestLogin/>}></Route>
      <Route path='hobby'>
        <Route index element={<AllHobby/>}/>
        <Route path=':hobbyCode' element={<HobbyDetail/>}/>

      </Route>
    </Routes>
    
    </BrowserRouter>
     {/* <AllHobby/> */}
   
    </>
  );
}

export default App;

