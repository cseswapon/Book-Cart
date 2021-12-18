import React from "react";
import "./ShopingBook.css";
import SingleShopingBook from '../SingleShopingBook/SingleShopingBook'
import { useSelector } from "react-redux";
const ShopingBook = () => {
  const book = useSelector((state)=>state.cart.bookList)
  return (
    <>
      <div className="my-4 text-context">
        <h1 className="text-center">Shopping Service</h1>
      </div>
      <div className="container justify-content-lg-between mx-auto row row-col-md-2 my-4">
        {
          book.map((bk)=><SingleShopingBook key={bk.id} book={bk} />)
        }
      </div>
    </>
  );
};

export default ShopingBook;
