import { React, useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";

const HomePage = () => {
    const [restraDetails, setRestraDetails] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    const onlineStatus=  useOnlineStatus()

    // const API_URl = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.5545573&lng=77.2969011&carousel=true&third_party_vendor=1"

    useEffect(() => {
        fetching();
    }, []);

    const fetching = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.588801471571653&lng=77.30209428817034&page_type=DESKTOP_WEB_LISTING"
              );
            const json = await data.json();
            setLoading(false);
            console.log("restralist",json);
            setRestraDetails(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRestaurant(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        } catch (err) {
            console.error("Error fetching menu", err);
            setLoading(false);

        }


    };
    if(onlineStatus === false){
        return <h1>You are offline. Please check your internet connection.</h1> // Show error message when offline
    }

    if (loading) {
        return <h1>Loading...</h1>; // Show loading state while data is being fetched
    }



    return (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        data-testid="searchInput"
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            const filteredRestaurant = restraDetails.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const filteredList = restraDetails.filter(
                                (res) => res.info.avgRating > 4.2
                            );
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>

            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <NavLink key={restaurant?.info.id} to={'/restaurantmenu/' + restaurant?.info.id}>
                        <RestaurantCard resData={restaurant?.info} />

                    </NavLink>


                ))}
            </div>
        </div>
    );
};

export default HomePage;
