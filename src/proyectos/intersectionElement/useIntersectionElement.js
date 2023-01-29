import { useEffect, useRef, useState } from 'react';

const useIntersectionElement = (options) => {
  const containerRef = useRef(null);
  const [isvisible, setIsvisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    console.log(isvisible);
    setIsvisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
    // console.log('offsetHeight', containerRef.current.offsetHeight); //area del elmento obsevado

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, options]);

  return [containerRef, isvisible];
};

export default useIntersectionElement;