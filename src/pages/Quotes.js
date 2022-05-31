import React from 'react';
import quotes from '../data/quotes';

const Quotes = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div>
      <p>{quote.quote}</p>
      <p>
        -&nbsp;
        {quote.name}
        &nbsp;
        (
        {quote.year}
        )
      </p>
      <p>{quote.title}</p>
    </div>
  );
};

export default Quotes;
