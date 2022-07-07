import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const startPage =
  (
    <div className="startPage">
      <h1 className="title">RNG</h1>
      <div className="playButton">
        <button type="button">PLAY</button>
      </div>
    </div>
  );
const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(startPage);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
