import React from 'react';
import Button from "react-bootstrap/Button";
const SingleShopingBook = ({book}) => {
    const { author, coverImageUrl, synopsis } = book;
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
                  <Button variant="primary">
                    Add to Cart <i className="fas fa-cart-plus"></i>
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default SingleShopingBook;