import React from 'react';
import quotes from '../data/quotes';
import './Quote.css';

const Quotes = () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="SectionContainer">
      <div className="ChalkBoard SectionContentContainer">
        <div className="SectionContent">
          <p className="Quote">
            &quot;
            {quote.quote}
            &quot;
          </p>
          <p className="QuotePerson">
            --&nbsp;
            {quote.name}
            &nbsp;
            (
            {quote.year}
            ),&nbsp;
            {quote.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
