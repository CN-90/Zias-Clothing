import React from 'react';
import './ProductCard.scss';
import '../../App.scss';

const ProductCard = ({ name, img, imgHover, price, onSale }) => {
  return (
    <div className="product-card">
      <div className="img-container">
        {onSale && <div className="sale-tag">SALE</div>}
        <img
          src={img}
          alt={name}
          onMouseOver={e => (e.currentTarget.src = imgHover)}
          onMouseLeave={e => (e.currentTarget.src = img)}
        />
      </div>
      <div className="text">
        <h3 className="light header-tertiary">{name}</h3>
        <h3 className="price light header-tertiary">${price}</h3>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductCard;
