import React from 'react';

const ProductItem = ({ data, addToCart }) => {
  const { id, name, price } = data;
  return (
    <div style={ { border: "1px solid gray", padding: "1rem" } } className="box-shadow" >
      <h4>{ name }</h4>
      <h5>{ price }</h5>
      <button className='button' onClick={ () => addToCart(id) } >Agregar</button>
    </div>
  );
};

export default ProductItem;