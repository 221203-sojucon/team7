import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/landing";
import { RoomPage } from "./components/room";

const App = () => {
  return (
    <div className="App" style={{
          height: '100vh'
				}}>
      <section style={{
          margin: '0 auto',
          width: '390px',
          height: '844px',
				}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/room" element={<RoomPage />}></Route>
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
};

export default App;
