import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';

function App() {
  console.log(timelineData);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Hallie's Social Media Feed</h1>
      </header>
      <main className="App-main">
      <Timeline events={timelineData.events}/>
      </main>
    </div>

  );
}

export default App;
