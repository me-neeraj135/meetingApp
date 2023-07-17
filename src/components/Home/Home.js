/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

function Home() {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/room/${value}`);
  };

  return (
    <div className="home">
      <div className="container">
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter room id"
            onChange={e => setValue(e.target.value)}
          />{" "}
          <br />
          <button onClick={handleClick}>join</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
