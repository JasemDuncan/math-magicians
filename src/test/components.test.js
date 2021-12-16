import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Calc from '../components/Calculator';
import Calculator from '../pages/Calculator';
import Home from '../pages/Home';
import Quotes from '../pages/Quotes';

describe('', () => {
  it('Home renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Calculator renders correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Quotes renders correctly', () => {
    const tree = renderer
      .create(<Quotes />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Calc renders correctly', () => {
    const tree = renderer
      .create(<Calc />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
