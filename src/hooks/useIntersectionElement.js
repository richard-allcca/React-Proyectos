import { useEffect, useRef, useState } from 'react';

// NOTE - hook Observer que retorna mensaje si el elemento es visible

const useIntersectionElements = (options) => {
  const elementRefs = useRef([]);
  const [isVisibleMap, setIsVisibleMap] = useState(new Map());

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      setIsVisibleMap(prevMap => new Map(prevMap).set(entry.target, entry.isIntersecting));
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentElementRefs = elementRefs.current;

    currentElementRefs.forEach((element) => {
      if (element && element.current) {
        observer.observe(element.current);
      }
    });

    return () => {
      currentElementRefs.forEach((element) => {
        if (element && element.current) {
          observer.unobserve(element.current);
        }
      });
    };
  }, [elementRefs, options]);

  const registerElementRef = (ref) => {
    elementRefs.current.push(ref);
  };

  return [registerElementRef, isVisibleMap];
};

export default useIntersectionElements;