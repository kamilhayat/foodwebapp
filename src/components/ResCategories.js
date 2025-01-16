import React from 'react';
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import ItemList from './ItemList';

const ResCategories = ({ data, isOpen, setIsOpen }) => {
    
    const toggleAccordion = () => {
        setIsOpen();
    };  

    return (
        <>
            <div className="w-3/5 mx-auto p-4">
                <div
                    className="bg-gray-100 h-10 rounded-lg flex justify-between shadow-lg cursor-pointer"
                    onClick={toggleAccordion}
                >
                    <span className="p-2 font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    {isOpen ? (
                        <TiArrowSortedUp className="m-2" />
                    ) : (
                        <TiArrowSortedDown className="m-2" />
                    )}
                </div>

                {isOpen &&<ItemList items={data.itemCards}/>}

            </div>
        </>
    );
};

export default ResCategories;
