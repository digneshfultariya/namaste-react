import { IMG_CDN_URL } from "../Constants";

const RestaurantCard = ({
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
    cloudinaryImageId
  }) => {
    return (
      <div className="restaurant-container">
        <img src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
          alt="image"/>
        <div className="names">{name}</div>
        <div className="categories">{cuisines.join(', ')}</div>
        <div className="restaurant-info-container">
            <div className="ratings">★ {avgRating}</div>
            <div className="separator">•</div>
            <div className="eta">{deliveryTime} min</div>
            <div className="separator">•</div>
            <div className="estimated-cost">{costForTwoString}</div>
        </div>
    </div>
    );
  };

export default RestaurantCard;