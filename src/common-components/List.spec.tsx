import React from 'react';
import {render, screen} from '@testing-library/react'
import App from "../index";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

describe('List Test Suite', () => {
  test('check initial Item state', () => {
    render(<App/>);
    expect(screen.getByText('Item clicked 0')).toBeInTheDocument();
  });

  test('check initial Item state', async () => {
    render(<App/>);
    await userEvent.click(screen.getByText('Item 3'))
    expect(screen.getByText('Item clicked 3')).toBeInTheDocument();
  });
});
