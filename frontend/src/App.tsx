import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/landing";
import { RoomPage } from "./components/room";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/room" element={<RoomPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
