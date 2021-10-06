import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = () => {
  const [homeActive, setHomeActive] = useState(true);
  const [postPageActive, setPostPageActive] = useState(false);
  const [linkPageActive, setLinkPageActive] = useState(false);

  const homeActiveFn = () => {
    setHomeActive(true);
    setLinkPageActive(false);
    setPostPageActive(false);
  };

  const postActiveFn = () => {
    setHomeActive(false);
    setLinkPageActive(false);
    setPostPageActive(true);
  };

  const linkActiveFn = () => {
    setHomeActive(false);
    setLinkPageActive(true);
    setPostPageActive(false);
  };

  return (
    <div>
      <div className="row">
        <div className="col-xl-11 mx-auto  card-background p-3">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-2 col-3  mx-auto text-center ">
              {" "}
              <p className="nav-btn">PeerXP</p>
            </div>
            {homeActive === true ? (
              <div className="col-xl-2 col-lg-2 col-md-5 col-5 mx-auto  text-center ">
                {" "}
                <Link to="/" className="text-deco-none">
                  <p className="nav-btn-active "> Home </p>
                </Link>
              </div>
            ) : (
              <div
                className="col-xl-2 col-lg-2 col-md-5 col-5 mx-auto  text-center "
                onClick={homeActiveFn}
              >
                {" "}
                <Link to="/" className="text-deco-none">
                  <p className="nav-btn"> Home </p>
                </Link>
              </div>
            )}
            {postPageActive === true ? (
              <div className="col-xl-2 col-lg-2 col-md-5 col-5 mx-auto text-center ">
                <Link to="/posts-page" className="text-deco-none">
                  <p className="nav-btn-active ">Post Page</p>
                </Link>
              </div>
            ) : (
              <div
                className="col-xl-2 col-lg-2 col-md-5 col-5 mx-auto text-center "
                onClick={postActiveFn}
              >
                <Link to="/posts-page" className="text-deco-none">
                  <p className="nav-btn ">Post Page</p>
                </Link>
              </div>
            )}
            {linkPageActive === true ? (
              <div className="col-xl-2 col-lg-2 col-md-5 col-5 mx-auto text-center ">
                <Link to="/links-page" className="text-deco-none">
                  <p className="nav-btn-active ">Link Page</p>
                </Link>
              </div>
            ) : (
              <div
                className="col-xl-2 col-lg-2 col-md-5 col-5 mx-auto text-center "
                onClick={linkActiveFn}
              >
                <Link to="/links-page" className="text-deco-none">
                  <p className="nav-btn ">Link Page</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
