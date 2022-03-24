import React from 'react';

const Product = ({ product }) => {
  //   console.log(product);
  const { img } = product;
  return (
    <div>
      <div className="product-container">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Product;
