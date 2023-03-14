import React, { useState, useCallback, useLayoutEffect } from "react";

function getSize(el: HTMLElement | null) {

  if (!el) {
    return {
      width: 0,
      height: 0,
    };
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight,
  };
}

export function useComponentDimensions(ref: React.RefObject<HTMLElement>) {
  const [componentDimensions, setComponentDimensions] = useState(
    getSize(ref.current)
  );

  const handleResize = useCallback(() => {
    if (ref.current) {
      setComponentDimensions(getSize(ref.current));
    }
  }, [ref]);

  useLayoutEffect(() => {
    if (!ref.current) return undefined;

    handleResize();

    let cleanup: () => void;

    if (typeof ResizeObserver === "function") {
      const resizeObserver = new ResizeObserver(() => {
        handleResize();
      });

      resizeObserver.observe(ref.current);

      cleanup = () => {
        resizeObserver.disconnect();
      };
    } else {
      window.addEventListener("resize", handleResize);

      cleanup = () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    return cleanup;
    // eslint-disable-next-line
  }, [ref.current]);

  return componentDimensions;
}
