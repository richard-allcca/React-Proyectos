---
description: 'A React Hook that returns the dimensions of a component'
labels: ['hook', 'dimensions', 'resize', 'resizeobserver']
---

## Introduction

In some cases, you might want to get the size of a component in your React application, for example, to know the size of an image for a lightbox component or to have an element with an animated size change.

React provides a hook called useLayoutEffect that lets you run some code after the layout and paint have happened, which is perfect for this use case.

Another hook useCallback is used to memoize the event handler, avoiding the creation of a new instance of the handler every render.

## The hook

This hook uses the useState hook to keep track of the dimensions of a component and returns an object with two properties, width and height.

It uses the useLayoutEffect hook to handle the resize of the component when it's first mounted and when the component is resized. In case the browser supports the ResizeObserver API, it uses this API to watch the component for size changes and update the dimensions, otherwise it uses the traditional window.addEventListener approach.

## The ResizeObserver API

The ResizeObserver API is a modern browser API that allows you to observe changes in the size of an element. It's more efficient than using traditional event listeners like window.resize or window.orientationchange, especially when you have multiple elements to observe.

Using the hook

import { useComponentDimensions } from '@nitsan770/linkedin-posts.react.hooks.use-component-dimensions';

    const ExampleComponent = () => {
      const ref = React.useRef(null);
      const { width, height } = useComponentDimensions(ref);

      return (

          width: {width}
          height: {height}

      );
    };

In this example, the hook is used in the ExampleComponent. We pass a ref to the hook, which is created using React.useRef and is used to access the DOM node of the component. The hook returns an object with two properties, width and height representing the dimensions of the component.

## Enlace

[tuto](https://bit.cloud/nitsan770/linkedin-posts/react/hooks/use-component-dimensions/~code/use-component-dimensions.docs.mdx)
