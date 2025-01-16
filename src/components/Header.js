import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../utility/logo2.png"
import { TiChartLine, TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";

// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  //   const onlineStatus = useOnlineStatus();

  //   const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);

  // Subscribing to the store using a Selector
  //   const cartItems = useSelector((store) => store.cart.items);
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50s ">
      <div className="logo-container">
        <img className="w-20" src={logo} alt="na" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          {/* <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li> */}
          <li className="px-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="px-4">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li className="px-4 items-center mt-1 relative">
            <NavLink to="/cart" className="relative">
              <TiShoppingCart className="text-2xl" />

              <span className="absolute -top-3 -right-3  text-l font-bold px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            </NavLink>
          </li>


          <button
            className="items-center justify-center mb-5"
            onClick={() => {
              btnName === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login");
            }}
          >
            {btnName}
          </button>


          {/* <li className="px-4 ">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;