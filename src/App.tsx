import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/contextApi";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Watch from "./pages/Watch.jsx";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div style={{ height: "7.5vh" }}>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/result/:searchQuery" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
