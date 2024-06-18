import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const text = 'Hello World!';

const elem = (
  <div>
      <h2 className="text">Text: {text}</h2>
      <input type="text"/>
      <label htmlFor=""></label>
      <button tabIndex="0">Click</button>
  </div>
)

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello Reha!');

root.render(
  elem
);


