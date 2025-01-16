import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestraMenu from '../utility/useRestraMenu';
import ResCategories from './ResCategories';

const RestaurantMenu = () => {
    const { resid } = useParams();
    const { resInfo, loading } = useRestraMenu(resid); 
    const [isOpen, setIsOpen] = useState(false);


    if (loading) {
        return <h1>Loading...</h1>; 
    }

    const info = resInfo?.cards?.[2]?.card?.card?.info;

    if (!info) {
        return <h1>Data not available</h1>; 
    }

    const { name, areaName, costForTwoMessage, cuisines, avgRating, sla } = info;

    const itemCards = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

    const categories = resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((items) =>
        items?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    if (itemCards.length === 0) {
        return <h1 className='mt-32'>No menu items available for this restaurant.</h1>;
    }

    return (
        <>

            <div className=' mt-28 ml-96'>

                <h2 className="text-2xl font-bold mb-2">{name || "N/A"}</h2>
            </div >


            <div className="w-3/5 mx-auto p-4 rounded-b-[36px]" style={{
                boxSizing: "linear-gradient(rgb(255, 255, 255) -6.71%, rgb(235, 235, 242) 56.19%, rgb(223, 223, 231) 106.56%)",
                boxShadow: "0px 4px 15px rgba(175, 175, 190, 0.6)",
            }}
            >
                <div className="flex items-center text-gray-600 text-sm space-x-2">
                    <span className="flex items-center space-x-1">
                        <span className=" font-extrabold">{avgRating || "N/A"}</span>
                    </span>
                    <span>•</span>
                    <span className='font-extrabold'>{costForTwoMessage || "N/A"}</span>
                </div>
                <div className="mt-3">
                    <h3 className="text-orange-600 font-medium cursor-pointer hover:underline">
                        {cuisines || "N/A"}
                    </h3>
                    <div className="mt-2 text-gray-800">
                        <p className="flex items-center">
                            <span className="font-bold mr-1">Outlet:</span>
                            <span>{areaName || "N/A"}</span>
                        </p>
                        <p className="flex items-center mt-1">
                            <span>{sla?.slaString || "N/A"}</span>
                        </p>
                    </div>
                </div>
            </div>


            <div>
                {categories.map((c, index) => (
                    <ResCategories key={c?.card?.card.title} data={c?.card?.card} isOpen={index === isOpen ? true : false}
                    setIsOpen={()=>setIsOpen(index)} />

                ))}
            </div>
        </>

    );
};

export default RestaurantMenu;
