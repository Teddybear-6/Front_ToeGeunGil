import { BrowserRouter,Routes, Route } from "react-router-dom";
import PublicRouter from "../public/router/PublicRouter";
import AdminRouter from "../admin/router/AdminRouter";
import LoginSignup from "../public/user/login/LoginSignup";/* Admin이랑 Public 페이지 연결해주는 Router  
각각의 Routing은 각각 페이지에서 하기 */

function MainRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/admin/*" element={<AdminRouter/>}/>
            <Route path="/public/*" element={<PublicRouter/>}/>
            <Route path="/signup" element={<LoginSignup/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default MainRouter;