// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import { createSerializer } from 'enzyme-to-json';



Enzyme.configure({adapter: new Adapter()})

expect.addSnapshotSerializer(createSerializer({mode:'deep'}))


// - enzyme tiene una falla si no instalas esto
// 1. npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
// 2. npm i enzyme-to-json
// 3. "npm install --save-dev enzyme"
