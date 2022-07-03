import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import sadKeanu from './assets/sadKeanu.jpg';
import amberHeard from './assets/amberHeard.webp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

const userName = {
  firstName: 'John',
  lastName: 'Wick'
};

const name = (userName) => {
  return userName.firstName + " " + userName.lastName;
};

const num = React.createElement('p', null, '12345');

const pElement =
  <>
    <p>brah man like cha dude {name(userName)} </p>
    {num}
    <div className="playButton">
      <button type="button">PLAY</button>
    </div>
    <div>
      <input></input>
    </div>
    <img src={sadKeanu} alt="pic of sad Keanu" className="sadKeanu"></img>
    <img src={amberHeard} alt="pic ofamber Heard" className="amberHeard"></img>
  </>;

const main = ReactDOM.createRoot(document.getElementById('main'));
main.render(pElement);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
