import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../pages/Calculator';
import Home from '../pages/Home';
import Quotes from '../pages/Quotes';

describe('Navigation on the site', () => {
  test('When users click on "Home"', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
  });

  test('When users click on "Calculator"', () => {
    render(
      <MemoryRouter>
        <Calculator />
      </MemoryRouter>,
    );
  });

  test('When users click on "Quotes"', () => {
    render(
      <MemoryRouter>
        <Quotes />
      </MemoryRouter>,
    );
  });
});
