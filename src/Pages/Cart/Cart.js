import React from "react";
import { useSelector } from "react-redux";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import SingleShoopCart from "../SingleShoopCart/SingleShoopCart";
const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  return (
    <>
      <Navbar></Navbar>
      <div className="container justify-content-lg-between mx-auto row row-col-md-2 my-4">
        {cartList.map((cart) => (
          <SingleShoopCart key={cart.id} cart={cart}></SingleShoopCart>
        ))}
      </div>
      <hr />
      <Footer></Footer>
    </>
  );
};

export default Cart;
