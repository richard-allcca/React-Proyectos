import { useEffect, useState, useRef } from 'react';


export function useObserver(options) {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observerRef = useRef(new IntersectionObserver((observerEntries) => {
    console.log(observerEntries[0].boundingClientRect.y);
    console.log(observerEntries);
    setEntries(observerEntries);
  }, options));

  useEffect(() => {
    const currentObserver = observerRef.current;
    currentObserver.disconnect();

    if (elements.length > 0) {
      elements.forEach(element => currentObserver.observe(element));
    }

    return () => {
      if (currentObserver) currentObserver.disconnect();
    };
  }, [elements]);


  return [observerRef.current, setElements, entries];
};
