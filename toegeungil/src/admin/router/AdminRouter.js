import { AdminMain } from '../components/AdminMain';
import { AdminAnswer } from '../components/AdminAnswer';
import AdminRouter from '../components/AdminMain';
import { Outlet } from 'react-router-dom';
import React from 'react'

export const AdminRouter = () => {
  return (
    <div>
      <AdminMain/>
      <AdminAnswer/>
      <AdminRouter/>
    
      
    </div>
  );
}
export default AdminRouter;
