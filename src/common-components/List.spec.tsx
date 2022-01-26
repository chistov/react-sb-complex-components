import React from 'react';
import {render} from '@testing-library/react'
import App from "../index";
import '@testing-library/jest-dom'


describe('List Test Suite', () => {
  test('renders List component', () => {
    const c = render(<App/>);
  });
});
