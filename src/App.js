import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { MainContext } from "./CountryContext";

import "./App.scss";
import Country from "./Country/Country";

const App = () => {
  return (
    <BrowserRouter>
      <MainContext>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:id" element={<Country />} />
          </Routes>
        </div>
      </MainContext>
    </BrowserRouter>
  );
};
export default App;
