import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"

import SharedLayout from "./components/SharedLayout";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
