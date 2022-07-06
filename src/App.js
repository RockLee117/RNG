import React from 'react';
import ReactDOM from 'react-dom/client';

import './App.css';

function App() {
  return (
    <div className="App">
      <p>bro + dude = righteous </p>    
    </div>
  );
}
export default App;

function Welcome(props){
  return( 
    <div className="Info">
      <div className="Name">
        <h1>Hello {props.name}</h1>
      </div>
      <div className="Gender">
        <p>{props.gender}</p>
      </div>
    </div>
  );
}
const text = ReactDOM.createRoot(
  document.getElementById('text')
);
text.render(<>
  <Welcome name='Beth' gender='female'/>
  <Welcome name='Bob' gender='male'/>
</>);


