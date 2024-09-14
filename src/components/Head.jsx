import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Foot from "./footer/Foot";

function Head() {
  return (
    <div>
      <Header />
      <Outlet />
      <Foot />
    </div>
  );
}

export default Head;
