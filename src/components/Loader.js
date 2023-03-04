import React from "react";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import './../styles/loader.css';

const Loader = () => {
    return (
        <div className='loader-container'>
            {
                Array(8)
                .fill("")
                .map((e, index) => (
                    <RestaurantCardShimmer key={ index }/>
            ))}
        </div>
    )
}

export default Loader;