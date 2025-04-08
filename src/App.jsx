// App.js
import React from 'react';
import './App.css';
import DestinationContainer from './DestinationContainer'; // Import the parent component

function App() {
  return (
    <div className="App">
      <h1>Top Travel Destinations</h1>
      <DestinationContainer />
    </div>
  );
}

export default App;
