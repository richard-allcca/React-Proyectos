import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useComponentDimensions } from './useComponentDimension';

describe('useComponentDimensions', () => {
  it('returns the dimensions of the component', () => {
    const { result } = renderHook(() => {
      const ref = React.useRef<HTMLDivElement>(null);
      const { width, height } = useComponentDimensions(ref);
      return { width, height };
    });
    expect(result.current.width).toBe(0);
    expect(result.current.height).toBe(0);
  });
});