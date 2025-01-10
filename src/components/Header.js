import { LOGO_URL } from "../utility/links";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
  //console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} />
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
          <li className="px-4">
            <NavLink to="/grocery">Grocery</NavLink>
          </li>
          {/* <li className="px-4 font-bold text-xl">
            <NavLink to="/cart">Cart - ({cartItems.length} items)</NavLink>
          </li> */}
          <button
            className="login"
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