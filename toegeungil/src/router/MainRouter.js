import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRouter from '../admin/components/AdminMain';
import PublicRouter from '../public/router/PublicRouter';
import QnaRouter from "../admin/router/QnaRouter";
import AdminAnswer from "../admin/components/AdminAnswer";

import 'bootstrap/dist/css/bootstrap.min.css';

/* Admin이랑 Public 페이지 연결해주는 Router  
각각의 Routing은 각각 페이지에서 하기 */

function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminRouter />} />
                <Route path="admin" element={<AdminRouter />} />
                <Route path="answer" element={<AdminAnswer/>}/>
                <Route path="public" element={<PublicRouter />} />
                <Route path="qna" element={<QnaRouter />} />


            </Routes>
        </BrowserRouter>
    );
}
export default MainRouter;