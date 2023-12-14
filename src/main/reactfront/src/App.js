import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MypageMain from "./pages/MypageMain.js";
import PasswordCheck from "./pages/PasswordCheck.js";
import MyinfoEdit from "./pages/MyinfoEdit";

const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<MypageMain />} />
        <Route path="/password-check" element={<PasswordCheck />} />
        <Route path="/myinfo-edit" element={<MyinfoEdit />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;