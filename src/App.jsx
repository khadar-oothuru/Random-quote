import React, { useState, useEffect } from 'react';
import QuoteCard from './components/QuoteCard';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const data = await response.json();
    setQuote(data[0]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Khadars  Quotes</h1>
        <QuoteCard quote={quote} onSave={saveQuote} />
        <button onClick={fetchQuote}>Get New Quote</button>
        <h2>Saved Quotes</h2>
        <div className="saved-quotes">
          {savedQuotes.map((savedQuote, index) => (
            <QuoteCard key={index} quote={savedQuote} />
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
