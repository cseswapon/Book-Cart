import React from "react";
import { Container, Navbar } from "react-bootstrap";
import useFirebase from "../../../hook/useFirebase";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
const NavBar = () => {
  const { user, singOut } = useFirebase();
  const { cartList } = useSelector((state) => state.cart);
  return (
    <Navbar variant="dark" sticky="top" bg="dark">
      <Container fluid className="align-items-center">
        <NavLink className="book-logo d-flex" to="/home">
          <i className="fas fa-book-open fs-1"></i>{" "}
          <span className="fw-bold fs-3 mx-3">Book</span>
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavLink
            className={
              !cartList.length > 0
                ? `disabled-link mx-md-3 book-logo`
                : `mx-md-3 book-logo`
            }
            to="/cart"
          >
            Cart <i className="fas fa-cart-arrow-down"></i>
            <span className="translate-middle badge rounded-pill bg-danger translate-middle-y">
              {cartList.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </NavLink>
          <Navbar.Text>
            Signed in as : <NavLink to="/home">{user.displayName}</NavLink>
          </Navbar.Text>
          {user.email && (
            <Navbar.Text
              onClick={singOut}
              style={{
                cursor: "pointer",
                margin: "0px",
                padding: "2px 5px",
                border: "1px solid yellow",
                borderRadius: "5px",
              }}
              className="ms-3 text-warning"
            >
              Logout <i className="fas fa-sign-out-alt"></i>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
