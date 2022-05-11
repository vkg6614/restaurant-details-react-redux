import React, { useState } from "react";
import "./Form.css";

const Form = ({ getDataFromJsonServer }) => {
  const [list, setList] = useState({
    resName: "",
    cost_for_one: "",
    rating: "",
    total_votes: "",
    reviews: "",
    min_order: "",
    delivered_time: "",
    url: "",
    payment_methods: {},
    categories: [],
  });

  const onInputChangeHandle = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setList({ ...list, [name]: value });
  };

  const onSelectChangeHandle = (e) => {
    let options = e.target.options;

    for (var i = 0; i < options.length; i++) {
      if (options[i].selected && options.length === 3) {
        list.payment_methods[options[i].innerText] = true;
      }
      if (options[i].selected === false && options.length === 3) {
        list.payment_methods[options[i].innerText] = false;
      }
    }

    list.categories = [];
    for (i = 0; i < options.length; i++) {
      if (options[i].selected) {
        list.categories.push(options[i].value);
      }
    }
  };

  const onFormSubmitGetList = (e) => {
    e.preventDefault();
    fetch("https://restaurant-details-react-redux.herokuapp.com/restaurants", {
      method: "POST",
      body: JSON.stringify(list),
      headers: {
        "Content-Type": "application/json",
      },
    });
    getDataFromJsonServer();
    setList({
      resName: "",
      cost_for_one: "",
      rating: "",
      total_votes: "",
      reviews: "",
      min_order: "",
      delivered_time: "",
      url: "",
      payment_methods: {},
      categories: [],
    });
  };

  return (
    <form className="form" onSubmit={onFormSubmitGetList}>
      <input
        onChange={onInputChangeHandle}
        name="resName"
        value={list.resName}
        type="text"
        placeholder="Restaurant Name"
      />
      <br />
      <input
        onChange={onInputChangeHandle}
        name="cost_for_one"
        type="number"
        placeholder="cost for one"
      />
      <br />
      <input
        onChange={onInputChangeHandle}
        name="rating"
        type="number"
        placeholder="rating"
        step="0.01"
      />
      <br />
      <input
        onChange={onInputChangeHandle}
        name="total_votes"
        type="number"
        placeholder="total_votes"
      />
      <br />
      <input
        onChange={onInputChangeHandle}
        name="revies"
        type="number"
        placeholder="reviews"
      />
      <br />
      <input
        onChange={onInputChangeHandle}
        name="min_order"
        type="number"
        placeholder="min_order"
      />
      <br />
      <input
        onChange={onInputChangeHandle}
        name="delivered_time"
        type="number"
        placeholder="delivered_time"
      />
      <br />
      <input
        onChange={onInputChangeHandle}
        name="url"
        type="text"
        placeholder="url"
      />
      <br />
      <div
        style={{
          width: "60%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <select onChange={onSelectChangeHandle} multiple>
          <option vlaue="cash" name="cash">
            Cash
          </option>
          <option vlaue="card" name="card">
            Card
          </option>
          <option vlaue="upi" name="upi">
            Upi
          </option>
        </select>

        <select multiple onChange={onSelectChangeHandle}>
          <option name="Continental" vlaue="Continental">
            Continental
          </option>
          <option name="Pizza" vlaue="Pizza">
            Pizza
          </option>
          <option name="Asian" vlaue="Asian">
            Asian
          </option>
          <option name="Desserts" vlaue="Desserts">
            Desserts
          </option>
          <option name="Asian Fusion" vlaue="Asian Fusion">
            Asian Fusion
          </option>
          <option name="Bakery" vlaue="Bakery">
            Bakery
          </option>
          <option name="Breakfast" vlaue="Breakfast">
            Breakfast
          </option>
          <option name="British" vlaue="British">
            British
          </option>
          <option name="Brunch" vlaue="Brunch">
            Brunch
          </option>
          <option name="Burgers" vlaue="Burgers">
            Burgers
          </option>
          <option name="Ruban Deli" vlaue="Ruban Deli">
            Ruban Deli
          </option>
          <option name="Doughnuts" vlaue="Doughnuts">
            Doughnuts
          </option>
          <option name="Family Fare" vlaue="Family Fare">
            Family Fare
          </option>
          <option name="Sandwiches" vlaue="Sandwiches">
            Sandwiches
          </option>
          <option name="Pancakes/Waffles" vlaue="Pancakes/Waffles">
            Pancakes/Waffles
          </option>
          <option name="Seafood" vlaue="Seafood">
            Seafood
          </option>
          <option name="Soul Food" vlaue="Soul Food">
            Soul Food
          </option>
          <option name="Soup & Salad" vlaue="Soup & Salad">
            Soup & Salad
          </option>
          <option name="Southern" vlaue="Southern">
            Southern
          </option>
          <option name="Live Entertainment" vlaue="Live Entertainment">
            Live Entertainment
          </option>
          <option name="Mediterranean" vlaue="Mediterranean">
            Mediterranean
          </option>
          <option name="Mexican" vlaue="Mexican">
            Mexican
          </option>
          <option name="Southern" vlaue="Southern">
            Southern
          </option>
          <option name="Gluten-free" vlaue="Gluten-free">
            Gluten-free
          </option>
          <option name="Greek" vlaue="Greek">
            Greek
          </option>
          <option name="Happy Hour" vlaue="Happy Hour">
            Happy Hour
          </option>
          <option name="Hot Dog" vlaue="Hot Dog">
            Hot Dog
          </option>
          <option name="Sports Bar" vlaue="Sports Bar">
            Sports Bar
          </option>
          <option name="Steaks" vlaue="Steaks">
            Steaks
          </option>
          <option name="Sushi" vlaue="Sushi">
            Sushi
          </option>
          <option name="Vegan" vlaue="Vegan">
            Vegan
          </option>
          <option name="Vegan Friendly" vlaue="Vegan Friendly">
            Vegan Friendly
          </option>
          <option name="Coffee" vlaue="Coffee">
            Coffee
          </option>
          <option name="Ice Cream" vlaue="Ice Cream">
            Ice Cream
          </option>
          <option name="Italian" vlaue="Italian">
            Italian
          </option>
          <option name="Japanese" vlaue="Japanese">
            Japanese
          </option>
          <option name="Latin American" vlaue="Latin American">
            Latin American
          </option>
          <option name="Indian" vlaue="Indian">
            Indian
          </option>
          <option name="Food Trucks" vlaue="Food Trucks">
            Food Trucks
          </option>
          <option name="French" vlaue="French">
            French
          </option>
          <option name="German" vlaue="German">
            German
          </option>
          <option name="Drinks" vlaue="Drinks">
            Drinks
          </option>
        </select>
      </div>
      <input type="submit" value="SUBMIT" />
    </form>
  );
};

export default Form;
