import React from "react";
import RestaurantCardShimmer from "./RestaurantCardShimmer";

const Loader = () => {
    return (
        <div className='loader-container'>
            <RestaurantCardShimmer />
            <RestaurantCardShimmer />
            <RestaurantCardShimmer />
            <RestaurantCardShimmer />
            <RestaurantCardShimmer />
            <RestaurantCardShimmer />
            <RestaurantCardShimmer />
            <RestaurantCardShimmer />
        </div>
    )
}

export default Loader;