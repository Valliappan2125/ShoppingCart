/* eslint-disable react/prop-types */
import { useEffect, useState,useContext } from "react";
import { cartContext } from "../App";

const Cart = () => {
    const {cart} = useContext(cartContext);
  const [total, setTotal] = useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc, curr)=> acc + parseInt(curr.price),0));
  },[cart])
  return (
    <>
      <h1 className="text-3xl text-center font-bold">Cart</h1>
      <div className="flex flex-col my-5">
        {cart.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-5 w-[80%] gap-5 flex items-center mb-5">
            <div>
              <img className="h-32 object-cover" src={product.image} alt={product.title} />
            </div>
            <div>
              <h3 className="text-xl font-bold">{product.title}</h3>
              <p className="text-sm text-gray-400">Price $: {product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-xl font-bold">Total Price $: {total}</h1>
    </>
  );
};

export default Cart;
