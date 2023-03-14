import React from 'react';
import { useComponentDimensions } from './useComponentDimension';

export const BasicUseComponentDimensions = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { width, height } = useComponentDimensions(ref);

  return (
    <div
      style={{
        width: '50%',
        height: '50%',
        background: 'lightgray',
        resize: 'both',
      }}
      ref={ref}
    >
      <div>width: {width}</div>
      <div>height: {height}</div>
    </div>
  );
};
