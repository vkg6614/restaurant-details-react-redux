import React, { useState, useEffect } from "react";
import "./Home.css";
import RestaurantDetails from "../RestaurantDetails/RestaurantDetails";
import Form from "../Form/Form";

const Home = () => {
  const [lists, setLists] = useState("");
  const [rating, setRating] = useState("");
  const [payment, setPayment] = useState("all");
  const [lowAndHigh, setLowAndHigh] = useState("");
  useEffect(() => {
    getDataFromJsonServer();
  }, []);

  const getDataFromJsonServer = async () => {
    const res = await fetch(
      "https://restaurant-details-react-redux.herokuapp.com/restaurants"
    );
    const data = await res.json();
    setLists(data);
  };

  return (
    <div className="main_container">
      <div className="buttons">
        <div className="ratingButton">
          <button onClick={() => setRating(1)}>1 Star</button>
          <button onClick={() => setRating(2)}>2 Star</button>
          <button onClick={() => setRating(3)}>3 Star</button>
          <button onClick={() => setRating(4)}>4 Star</button>
        </div>
        <div className="paymentButton">
          <button onClick={() => setPayment("cash")}>Cash</button>
          <button onClick={() => setPayment("card")}>Card</button>
          <button onClick={() => setPayment("all")}>All</button>
        </div>
        <div className="costForTwoButton">
          <button onClick={() => setLowAndHigh("low-high")}>Low To High</button>
          <button onClick={() => setLowAndHigh("high-low")}>High To Low</button>
        </div>
      </div>
      <RestaurantDetails
        lists={lists}
        rating={rating}
        payment={payment}
        lowAndHigh={lowAndHigh}
      />
      <Form getDataFromJsonServer={getDataFromJsonServer} />
    </div>
  );
};

export default Home;
