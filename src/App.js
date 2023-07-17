/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Room from "./components/Room/Room";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello meet</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
