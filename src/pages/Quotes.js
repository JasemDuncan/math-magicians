import React from 'react';
import './Quotes.css';

const Quotes = () => {
  const QuotesData = {
    name: 'William Paul Thurston',
    quote:
        'Mathematics is not about numbers, equations, computations, or algorithms: It is about understanding',
  };

  const Quote = () => {
    const { name, quote } = QuotesData;
    return (
      <>
        <div className="content">
          <div className="nameQuote">
            {name}
          </div>
          <div className="quote">
            {quote}
          </div>
        </div>
      </>
    );
  };

  return (
    <Quote />
  );
};

export default Quotes;
