/* eslint-disable react/prop-types */
import { useContext } from "react";
import { cartContext } from "../App";

const ProductCard = ({ product}) => {
    const {cart, setCart} = useContext(cartContext);
  const name =
    product.title.length > 21
      ? product.title.substring(0, 20) + "..."
      : product.title;

  function addCart() {
    setCart([...cart,product])
  }

  function removeCart() {
    setCart(cart.filter((item)=> item.id !== product.id))
  }

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-4 w-[80%]">
        <img
          src={product.image}
          alt={name}
          className="h-32 object-cover mb-4"
        />
        <div>
          <h5 className="text-lg font-bold">{name}</h5>
          <p className="text-green-500 font-semibold mb-5">$ {product.price}</p>
          {cart.includes(product) ? (
            <button onClick={removeCart} className="text-white bg-red-500 px-5 py-2 rounded-md">
              remove from Cart
            </button>
          ) : (
            <button onClick={addCart} className="text-white bg-blue-500 px-5 py-2 rounded-md">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
