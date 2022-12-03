import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>{/* <Route path="/" element={<MainPage />}></Route> */}</Routes>
      </BrowserRouter>
    </div>
  );
};
