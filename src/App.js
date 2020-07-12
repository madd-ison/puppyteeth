import React from 'react';
import './App.css';
import Header from './Header';
import PlayerContainer from './PlayerContainer';
import Contact from './Contact';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <PlayerContainer />
      </div>
      
    </div>
  );
  }
}

export default App;
