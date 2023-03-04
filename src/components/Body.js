import RestaurantCard from "./RestaurantCard";
import Loader from "./Loader";
import { useState, useEffect } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData;
}

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)
const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // empty dependency array => once after render
+  // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
 useEffect(() => {
      getRestaurants()
  }, [])

  const getRestaurants = async () => {
      let response, jsonResponse;
      try {
          response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.444898&lng=78.362345&page_type=DESKTOP_WEB_LISTING')
          jsonResponse = response.ok ? await response.json() : await Promise.reject(response.status)
      } catch (e) {
          console.warn("Error occurred")
      }
      setAllRestaurants(jsonResponse.data?.cards[2]?.data?.data?.cards)
      setFilteredRestaurants(jsonResponse.data?.cards[2]?.data?.data?.cards);
      setIsLoading(false);
  }

  // not render component (Early return)
  if (!allRestaurants) return null;

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
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}>Search</button>
      </div>
      <div className="restaurant-list-container">
        {
          isLoading ? <Loader /> : (filteredRestaurants?.length === 0 ? <h1>No Restraunt match your Filter!!</h1> : filteredRestaurants.map((filteredRestaurant) => {
            return <RestaurantCard {...filteredRestaurant.data}
                            key={filteredRestaurant.data.id}>
                </RestaurantCard>;
        }))
        }
      </div>
      </>
      
    );
  };  
 
export default Body;