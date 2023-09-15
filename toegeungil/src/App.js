import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityMain from "./public/community/pages/CommunityMain";
import CommunityView from "./public/community/pages/CommunityView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/communitys" element={<CommunityMain />} />
        <Route path="/communitys/:communityNum" element={<CommunityView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
