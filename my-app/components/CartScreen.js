import AppContext from "./AppContext";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function CartScreen() {
  const context = useContext(AppContext);

  const router = useRouter();

  const { removeFromCart, updateQuantity } = useContext(AppContext);

  const checkoutHandler = () => {
    router.push("/shipping");
  };
  console.log(context?.cart);
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {context?.cart?.length === 0 ? (
        <h4 className="mb-4">
          <Link className="text-blue-500 hover:underline" href="/" passHref>
            Your cart is empty. Go back!
          </Link>
        </h4>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
          <div className="md:col-span-6">
            <ul className="divide-y divide-gray-300">
              {context?.cart?.map((item) => (
                <li key={item.product} className="py-4 flex items-center">
                  <div className="md:w-1/6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="md:w-2/6">
                    <Link
                      className="text-blue-500 hover:underline"
                      href={`/product/${item.product}`}
                      passHref
                    >
                      {item.name}
                    </Link>
                  </div>
                  <div className="md:w-1/6">${item.price}</div>
                  <div className="md:w-1/6">
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        updateQuantity(item._id, +e.target.value)
                      }
                      className="w-full p-2 border rounded"
                    >
                      {[...Array(item.countInStock).keys()].map((el) => (
                        <option key={el + 1} value={el + 1}>
                          {el + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:w-1/6">
                    <button
                      type="button"
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <p>Remove</p>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <div className="bg-white rounded p-4">
              <h2 className="text-xl font-bold mb-4">
                Subtotal (
                {context.cart.reduce((acc, item) => acc + item.qty, 0)} items)
              </h2>
              <p className="text-xl mb-4">
                $
                {context.cart
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </p>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                disabled={context.cart.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartScreen;
