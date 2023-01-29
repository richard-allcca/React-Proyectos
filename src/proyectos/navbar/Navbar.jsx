import React, { useState } from 'react';
import { BgDiv, NavContainer } from './NavbarStyled';
import BurguerButton from './BurguerButton';

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <h2>Navbar <span>Responsive</span></h2>

        <div className={ `links ${clicked ? 'active' : ''}` }>
          <a onClick={ handleClick } href="#h">Home</a>
          <a onClick={ handleClick } href="#h">Shop</a>
          <a onClick={ handleClick } href="#h">About</a>
          <a onClick={ handleClick } href="#h">Contac</a>
          <a onClick={ handleClick } href="#h">Blog</a>
        </div>

        <div className="burguer">
          <BurguerButton clicked={clicked}  handleClick={handleClick} />
        </div>

        <BgDiv className={ `initial ${clicked ? 'active' :'' } `} ></BgDiv>
      </NavContainer>
    </>
  );
};

export default Navbar;