import React from "react";

const Pokemon = ({ name, avatar }) => {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};

export default Pokemon;
