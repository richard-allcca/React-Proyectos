import React from 'react'
import useCounterAnimation from './../../hooks/useCoutnerAnimation';

const CoutnerAnimation = () => {
  const counter = useCounterAnimation({ count: 356.68, speed: 1000, isDecimal: true, locale: 'es-AR', delay: 100 });

  return (
    <>
    <div>CoutnerAnimation</div>
    <hr />
    <p>{counter}</p>
    </>
  )
}

export default CoutnerAnimation