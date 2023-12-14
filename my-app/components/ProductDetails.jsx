import React from "react";
import products from "../products.json";
import AppContext from "./AppContext";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext } from "react";
function ProductScreen() {
  const router = useRouter();
  const { addToCart } = useContext(AppContext);

  const id = router.query.org;
  const productId = id && typeof id === "string" ? id : "";
  const product = products.products.find((p) => p._id === productId);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      console.log("Product added to cart:", product);
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Link
        href="/"
        className="bg-red-500 text-white px-4 py-2 rounded inline-block my-3"
      >
        {" "}
        Go Back Home
      </Link>
      <div className="text-2xl font-bold mb-4">{product.name}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto"
          />
        </div>
        <div>
          <div className="mb-4">Price: ${product.price}</div>
          <div className="mb-4">Description: {product.description}</div>
        </div>
      </div>
      <div className="mt-4">
        <div className="mb-4">
          <span className="font-semibold">Price:</span> ${product.price}
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Add To Cart
        </button>
      </div>
    </>
  );
}

export default ProductScreen;
