import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData;
}

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
const Body = () => {

    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

    return (
      <>
      <div className="search-container">
          <input type="text"
                  name="search"
                  className="search-input"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
          />
          <button className="search-btn" onClick={() => {
            //need to filter the data
            const data = filterData(searchText, restaurants);
            // update the state - restaurants
            setRestaurants(data);
          }}>Search</button>
      </div>
      <div className="restaurant-list-container">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
      </>
      
    );
  };  
 
export default Body;