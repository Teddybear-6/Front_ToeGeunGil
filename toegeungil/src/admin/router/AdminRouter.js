import {AdminMain} from '../components/AdminMain';
import { AdminAnswer } from '../components/AdminAnswer';
import AdminRouter from '../components/AdminMain';
import {QnaMain} from '../Pages/QnaMain';
import { Outlet } from 'react-router-dom';
import React from 'react'

export const AdminRouter = () => {
  return (
    <div>
      <AdminRouter/>
      <AdminMain/>
      <AdminAnswer/>
    </div>
  );
}
export default AdminRouter;
