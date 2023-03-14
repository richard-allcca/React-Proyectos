// REVIEW - solo para uso con Js

import React, { useEffect, useState } from 'react';
import './styles.css';

const ResizeO = () => {
  // detectar resize 
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (size > 577) {
      // setOpenMenu(false);
      // handleMobileMenu(false);
      // .....code
    }
  }, [size]);


  return (
    <div className='contain'>
      <h1>Example Resize</h1>
      <textarea resize className='textarea' name="area" id="area" cols="30" rows="10"></textarea>
    </div>
  );
};

export default ResizeO;

