import React from 'react'
import { Addtocart } from '../utility/cartSlice'
import { useDispatch } from 'react-redux'
const ItemList = ({ items, isOpen, setIsOpen }) => {
    const dispatch = useDispatch()
    const handleAddItem = (item) => {
        dispatch(Addtocart(item))
        // alert("Item added to cart")
    }
    return (
        

            <div className="bg-white p-4 shadow-inner rounded-lg mt-2 flex flex-col space-y-4">
                {items.map((item) => (
                    <div
                        key={item.card.info.id}
                        className="flex items-center justify-between border-b-2 border-gray-300 pb-4"
                    >
                        <div className="flex-1 pl-4">
                            <h1 className="font-bold text-gray-800">{item.card.info.name}</h1>
                            <h1 className="font-medium text-gray-800">₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</h1>
                            <span className="text-gray-600">{item.card.info.description}</span>
                        </div>

                        <div className="ml-4 relative">
                            <img
                                className="w-28 h-28 rounded-lg object-cover"
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${item.card.info.imageId}`}
                                alt={item.card.info.name}
                            />
                            <button
                                className=" absolute bottom-0 left-1.5 translate-y-2/4 text-lg text-green-400 bg-white border-b-2 px-8 py-1 rounded-md shadow-md" onClick={() => handleAddItem(item)}
                            >
                                ADD
                            </button>
                        </div>
                    </div>
                ))}
            </div>

    )
}

export default ItemList