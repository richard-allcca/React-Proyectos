import { useRef } from 'react';
import '../../styles/intersectionElements.css';
import useIntersectionElements from '../../hooks/useIntersectionElement';

// NOTE - hook Observer que retorna mensaje si el elemento es visible

const IntersectionElement = () => {
  const [registerElementRef, isVisibleMap] = useIntersectionElements();

  const elementRef1 = useRef(null);
  const elementRef2 = useRef(null);

  registerElementRef(elementRef1);
  registerElementRef(elementRef2);

  const isVisible1 = isVisibleMap.get(elementRef1.current);
  const isVisible2 = isVisibleMap.get(elementRef2.current);

  return (
    <div className="container">
      <div className="isVisible">
        { isVisible1 ? "ELEMENT 1 IN VIEWPORT" : "1 NOT IN VIEWPORT" }
        <hr />
        { isVisible2 ? "ELEMENT 2 IN VIEWPORT" : "2 NOT IN VIEWPORT" }
      </div>

      <div className="space"></div>
      {/* <div className="section"></div> */}

      <div className="box" ref={ elementRef1 }>
        <img src="https://placeimg.com/200/200/nature" alt="nature" />
      </div>
      <div className="box" ref={ elementRef2 }>
        <img src="https://placeimg.com/200/200/nature" alt="nature" />
      </div>
    </div>
  );
};

export default IntersectionElement;

// https://dev.to/producthackers/intersection-observer-using-react-49ko