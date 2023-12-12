import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MypageMain from "./pages/MypageMain.js";

const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<MypageMain />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;