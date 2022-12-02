import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Header/Header";
import About from "./Pages/About/About";
import { useState } from "react";

function App() {
  const [darkTheme,setDarkTheme] = useState(true)
  return (
    <BrowserRouter>
      <div className="App">
        <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes>
          <Route path="/" element={<Home darkTheme={darkTheme} />} />
          <Route path="/About" element={<About darkTheme={darkTheme} />} />
          <Route path="/Contact" element={<Home darkTheme={darkTheme} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
