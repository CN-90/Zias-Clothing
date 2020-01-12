import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div className="nav container" id="nav__container">
        <div className="logo">ZIAS</div>
        <ul className="nav__list">
          <li className="nav__list-option">HOME</li>
          <li className="nav__list-option" id="nav-shop">
            SHOP
            <div className="shop-dropdown">
              <div className="dropdown-flex">
                <ul className="shop-option-list">
                  <p className="shop-option-category">WOMEN</p>
                  <li>Clothing</li>
                  <li>Handbags</li>
                  <li>Watches</li>
                  <li>Hats</li>
                </ul>
                <ul className="shop-option-list">
                  <p className="shop-option-category">MEN</p>
                  <li>Clothing</li>
                  <li>Watches</li>
                  <li>Hats</li>
                  <li>Handbags</li>
                </ul>
                <ul className="shop-option-list">
                  <p className="shop-option-category">ACCESSORIES</p>
                  <li>Belts</li>
                  <li>Scarfs</li>
                  <li>Hats</li>
                  <li>Handbags</li>
                </ul>
                <ul className="shop-option-list">
                  <p className="shop-option-category">BEST SELLERS</p>
                </ul>
              </div>
              <div className="dropdown-new">
                <p className="shop-option-category">NEW ARRIVALS</p>
                <div className="new-items">items go here.</div>
              </div>
            </div>
          </li>
          <li style={{ marginRight: '75px' }} className="nav__list-option">
            ABOUT
          </li>

          <li className="nav__list-option">LOGIN</li>
          <li className="nav__list-option">CART</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
