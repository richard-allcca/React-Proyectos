// NOTE - Observer para una o más imagines, cambia src de la image si esta visible al 100%


import React, { useEffect, useRef } from 'react';
import "../../styles/contentObserver.css";
import { useContentObserver } from '../../hooks/useContentObserver';

const ContentObserver = () => {
  const containerRef = useRef(null);
  const [observer, setElements, entries] = useContentObserver({
    threshold: 1,
    root: null,
  });

  useEffect(() => {
    if (containerRef.current) {
      const images = containerRef.current.querySelectorAll('.img');
      setElements(images);
    }
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove('lazy');
        observer.unobserve(lazyImage);
      }
    });
  }, [entries, observer]);

  return (
    <>
      <h1>UserObserver hook example ⬇️</h1>
      <div className="content-observer" ref={containerRef}>
        <img
          className="img lazy"
          src="https://placeimg.com/500/500/animals"
          data-src="https://res.cloudinary.com/thouma/image/upload/v1632788548/dev-master_xqpsns.jpg"
          alt="Dev"
        />
        <img
          className="img lazy"
          src="https://placeimg.com/500/500/animals"
          data-src="https://res.cloudinary.com/thouma/image/upload/v1632788548/dev-master_xqpsns.jpg"
          alt="Dev"
        />
      </div>
    </>
  );
};

export default ContentObserver;


// Para un solo elemento
// https://dev.to/producthackers/intersection-observer-using-react-49ko