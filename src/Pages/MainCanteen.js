import React from "react";
import "../../src/styles/Maincanteen.css";
// import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchBar from "../Components/SearchBar/SearchBar";
import PizzaMenu from "../Components/PizzaMenu/PizzaMenu";
import PizzaData from "../PizzaData";

const MainCanteen = (props) => {
  return (
    <>
      <div className="maincanteen-container">
        <div className="maincanteen-navbar">
          <div className="arrowback-maincanteen">
            <ArrowBackIcon
              className="arrowback-icon-maincanteen"
              style={{ fontSize: "33px" }}
            />
          </div>
          <div className="title-maincateen">
            <h2>Main Canteen</h2>
          </div>
          <div className="searchbar-maincanteen">
            <SearchBar />
          </div>
        </div>
        <div className="canteena-body">
          <div className="canteen-body-header">
            <div className="canteenacard">
              <div className="canteencard-img">
                <img
                  className="main-canteen-card-img"
                  src="/images/pizza.png"
                  alt="not available"
                />
              </div>
              <div className="canteena-card-title">
                <h2>Pizza</h2>
              </div>
            </div>
            <div className="canteenacard">
              <div className="canteencard-img">
                <img
                  className="main-canteen-card-img"
                  src="/images/burger.png"
                  alt="not available"
                />
              </div>
              <div className="canteena-card-title">
                <h2>Burger</h2>
              </div>
            </div>
            <div className="canteenacard">
              <div className="canteencard-img">
                <img
                  className="main-canteen-card-img"
                  src="/images/ice-cream.png"
                  alt="not available"
                />
              </div>
              <div className="canteena-card-title">
                <h2>Ice Cream</h2>
              </div>
            </div>
            <div className="canteenacard">
              <div className="canteencard-img">
                <img
                  className="main-canteen-card-img"
                  src="/images/pasta.png"
                  alt="not available"
                />
              </div>
              <div className="canteena-card-title">
                <h2>Pasta</h2>
              </div>
            </div>
            <div className="canteenacard">
              <div className="canteencard-img">
                <img
                  className="main-canteen-card-img"
                  src="/images/biryani.png"
                  alt="not available"
                />
              </div>
              <div className="canteena-card-title">
                <h2>Biryani</h2>
              </div>
            </div>
          </div>
          <div className="canteen-body-body">
            <h2 className="Canteen-body-card-title">Pizza</h2>
            <div className="menu-start">
            {PizzaData.map((item, index) => {
              return (
                <PizzaMenu
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  item={item}
                />
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCanteen;
