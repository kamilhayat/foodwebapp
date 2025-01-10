import React from 'react';
import { useParams } from 'react-router-dom';
import useRestraMenu from '../utility/useRestraMenu';

const RestaurantMenu = () => {
    const { resid } = useParams();
    const { resInfo, loading } = useRestraMenu(resid); // Use custom hook

    if (loading) {
        return <h1>Loading...</h1>; // Show loading state
    }

    const info = resInfo?.cards?.[2]?.card?.card?.info;

    if (!info) {
        return <h1>Data not available</h1>; // Fallback if info is undefined
    }

    const { name, city, costForTwoMessage, cuisines } = info;

    // Safely access itemCards
    const itemCards = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

    if (itemCards.length === 0) {
        return <h1>No menu items available for this restaurant.</h1>;
    }

    return (
        <div>
            <h1>Restaurant Menu</h1>
            <h2>{name || "N/A"}</h2>
            <h3>{city || "N/A"}</h3>
            <h4>{costForTwoMessage || "N/A"}</h4>
            <h5>{cuisines?.join(", ") || "N/A"}</h5>
            <ul>
                {itemCards.map((items) => (
                    <li key={items.card.info.id}>{items.card.info.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
