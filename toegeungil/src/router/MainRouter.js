import { BrowserRouter,Routes, Route } from "react-router-dom";
import PublicRouter from "../public/router/PublicRouter";
import AdminRouter from "../admin/router/AdminRouter";
import LoginSignup from "../public/user/login/LoginSignup";/* Admin이랑 Public 페이지 연결해주는 Router  
각각의 Routing은 각각 페이지에서 하기 */
import Findpass from "../public/user/findpassword/Findpass";

function MainRouter(){
    return(

        <>
            {/* <Routes>
                <Route path="/admin/*" element={<AdminRouter/>}/>
                <Route path="/public/*" element={<PublicRouter/>}/>
            </Routes> */}

            <PublicRouter/>
            <AdminRouter/>
            <LoginSignup/>
            <Findpass/>
        </>

    )
}
export default MainRouter;