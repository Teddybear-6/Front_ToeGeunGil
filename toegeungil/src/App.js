import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityMain from "./public/community/pages/CommunityMain";
import CommunityRegist from "./public/community/pages/CommunityRegist";
import CommunityDetail from "./public/community/pages/CommunityDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/communitys" element={<CommunityMain/>}/>
        <Route path="/communitys/:communityNum" element={<CommunityDetail/>} />
        <Route path="/communitys" element={<CommunityRegist/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
