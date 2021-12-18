import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeToCartList } from '../Redux/slice/cartSlice';
const SingleShoopCart = ({ cart }) => {
    console.log(cart.id);
    const { coverImageUrl, author, synopsis } = cart
    const dispatch = useDispatch();
    return (
      <>
        <div className="mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-2 align-items-center">
            <div className="col-md-4">
              <img
                src={coverImageUrl}
                className="img-fluid rounded-start"
                alt="avator"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{author}</h3>
                <p className="card-text">{synopsis?.slice(0, 250)}...</p>
                <p className="card-text">
                  <Button
                    onClick={() => dispatch(removeToCartList(cart?.id))}
                    variant="danger"
                  >
                    Delete <i className="fas fa-trash-alt"></i>
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default SingleShoopCart;