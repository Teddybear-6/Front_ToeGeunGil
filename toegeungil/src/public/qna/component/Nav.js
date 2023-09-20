import { Link } from 'react-router-dom';
import React  from 'react';
import './css/Nav.css';

function Nav(){
    return (
        <div>
            <div className='navbar'>
                <Link className='navbarMenu' to={'/'}>공지사항</Link>
                <Link className='navbarMenu' to={'/QnaMain'}>문의하기</Link>
                <Link className='navbarMenu' to={'/'}>신고하기</Link>
            </div>
        </div>
    );
}
export default Nav;