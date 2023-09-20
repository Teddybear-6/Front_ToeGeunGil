import PublicRouter, { QuestionMain } from '../qna/pages/QuestionMain';
import { Outlet } from 'react-router-dom';
import QuestionMain from '../qna/pages/QuestionMain';
import React from 'react'

export const PublicRouter = () => {
  return (
    <div>
      <PublicRouter/>
     <QuestionMain/>
      
    </div>
  );
}
export default AdminRouter;
