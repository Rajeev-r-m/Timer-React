import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: props.initialTime || 0,
      inputTime: "",
      isRunning: false,
    };

    this.timerInterval = null;
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });
      this.timerInterval = setInterval(this.tick, 1000);
    }
  };

  stopTimer = () => {
    if (this.state.isRunning) {
      clearInterval(this.timerInterval);
      this.setState({ isRunning: false });
    }
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({ time: 0, inputTime: "" });
  };

  tick = () => {
    if (this.state.time > 0) {
      this.setState({ time: this.state.time - 1 });
    } else {
      this.stopTimer();
    }
  };

  handleInputChange = (event) => {
    this.setState({ inputTime: event.target.value });
  };

  handleSetTime = () => {
    const inputTime = parseInt(this.state.inputTime, 10);
    if (!isNaN(inputTime) && inputTime >= 0) {
      this.setState({ time: inputTime });
    }
  };

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  render() {
    return (
      <div className="timer">
        <h1>Countdown Timer</h1>
        <div className="time">{this.formatTime(this.state.time)}</div>
        <div className="controls">
          <button onClick={this.startTimer} disabled={this.state.isRunning}>
            Start
          </button>
          <button onClick={this.stopTimer} disabled={!this.state.isRunning}>
            Stop
          </button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
        <div className="set-time">
          <input
            type="number"
            placeholder="Set Time (in seconds)"
            value={this.state.inputTime}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSetTime}>Set</button>
        </div>
      </div>
    );
  }
}

export default Timer;
