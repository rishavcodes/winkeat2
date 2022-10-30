import React from "react";
import "../../src/styles/Maincanteen.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchBar from "../Components/SearchBar/SearchBar";
import PizzaMenu from "../Components/PizzaMenu/PizzaMenu";
import PizzaData from "../PizzaData";
import { Scrollbars } from "react-custom-scrollbars";
import MainCanteenBodyHeader from "../Components/MainCanteenBodyHeader/MainCanteenBodyHeader";
// import { CartState } from "../Components/Context";
import CanteenHeaderListData from "../CanteenHeaderListData";
import HorizontalScroll from "react-horizontal-scrolling";


const MainCanteen = (props) => {
  // const {state} = CartState();

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
          <HorizontalScroll>
          <div className="canteen-list-maincanteen">
            {CanteenHeaderListData.map((item) => {
              return (
                <MainCanteenBodyHeader
                  key={item.id}
                  img={item.img}
                  title={item.title}
                />
              );
            })}
          </div>
          </HorizontalScroll>

          <div className="canteen-body-body">
            <Scrollbars style={{ width: 1300, height: 300 }}>
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
            </Scrollbars>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCanteen;
