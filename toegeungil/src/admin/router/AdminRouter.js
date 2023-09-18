import AdminMain from '../components/AdminMain';
import { AdminAnswer } from '../components/AdminAnswer';
import { Outlet } from 'react-router-dom';
import React from 'react'

export const AdminRouter = () => {
  return (
    <div>
      <AdminMain/>
      <AdminAnswer/>
    </div>
  );
}
export default AdminRouter;
