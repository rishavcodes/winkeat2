import React from "react";
import "../../src/styles/Homepage.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import Navbar from "../Components/Navbar/Navbar";
import CanteenList from "../Components/Canteenlist/CanteenList";

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <CanteenList />
    </>
  );
};

export default HomePage;
