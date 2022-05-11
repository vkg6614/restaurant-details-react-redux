import React from "react";
import "./RestaurantDetails.css";
import { ChevronRightIcon } from "@chakra-ui/icons";

const RestaurantDetails = ({ lists, rating, payment, lowAndHigh }) => {
  //   console.log(rating, payment, lowAndHigh);
  return (
    <div className="grid">
      {lists &&
        lists
          .filter((list) => {
            return list.rating > rating;
          })
          .filter((list) => {
            if (payment === "all") {
              return true;
            }
            return list.payment_methods[payment];
          })
          .sort((a, b) => {
            if (lowAndHigh === "low-high") {
              return a.cost_for_one - b.cost_for_one;
            }
            if (lowAndHigh === "high-low") {
              return b.cost_for_one - a.cost_for_one;
            }
            return 0;
          })
          .map((list) => (
            <div className="list-container">
              <div className="grid-div">
                <div className="img-div">
                  <img
                    width="100%"
                    height="100px"
                    src={list.url}
                    alt={list.restName}
                  />
                </div>

                <div className="content">
                  <h2 style={{ color: "rgb(186, 59, 60)" }}>{list.restName}</h2>
                  <div className="categories">
                    {list && list.categories.map((cat) => <span>{cat}, </span>)}
                  </div>
                  <p>Cost ₹{list.cost_for_one} for one</p>
                  <div>
                    <span>Min ₹{list.min_order} . </span>
                    <span>Up to {list.delivered_time} min</span>
                  </div>
                  <p>
                    Accepts{" "}
                    {list.payment_methods.cash
                      ? "online and cash on delivery both"
                      : "online payments only"}
                  </p>
                </div>
                <div className="ratings">
                  <h3
                    style={{
                      backgroundColor: "rgb(114,160,43)",
                      color: "white",
                      width: "fit-content",
                      padding: "1px 0.2em",
                      borderRadius: "5px",
                    }}
                  >
                    {list.rating}
                  </h3>
                  <p>{list.total_votes} votes</p>
                  <p>{list.reviews} reviews</p>
                </div>
              </div>
              <div className="online-payment-div">
                <button>
                  Order Online{" "}
                  <span>
                    <ChevronRightIcon />
                  </span>
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default RestaurantDetails;
