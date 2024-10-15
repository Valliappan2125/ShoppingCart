/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Navbar = ({cart}) => {
  return (
    <>
      <div className="w-full h-12 bg-blue-950 text-white flex items-center justify-between py-0 px-5">
        <Link to={"/"} className="text-xl">Shopping Cart</Link>
        <div className="flex gap-5">
          <Link to={"/"} className="flex items-center">Home</Link>
          <Link to={"/cart"} className="flex items-center gap-2"><span className="bg-red-500 rounded-full inline-block w-6 h-6 text-center">{cart.length}</span> View Cart</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
