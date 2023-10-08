import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Portal() {
  return (
    <div id="wrapper">
      <Sidebar></Sidebar>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar></Topbar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Portal;
