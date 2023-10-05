import React from 'react';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <div className="timer-container">
        <Timer initialTime={300} /> {/* Set the initial time (e.g., 300 seconds) */}
      </div>
    </div>
  );
}

export default App;
