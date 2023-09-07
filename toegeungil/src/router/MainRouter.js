import { BrowserRouter,Routers, Route } from "react-router-dom";

/* Admin이랑 Public 페이지 연결해주는 Router  
각각의 Routing은 각각 페이지에서 하기 */

function MainRouter(){
    return(
        <BrowserRouter>
        <Routers>
            <Route path="/admin/*" element={}/>
            <Route path="/public/*" element={}/>
        </Routers>
        </BrowserRouter>
    )
}
export default MainRouter;