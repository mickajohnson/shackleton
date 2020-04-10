import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import AddPlayer from './components/AddPlayer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
    this.socket = socketIOClient('http://192.168.0.22:4001');
  }

  componentDidMount() {
    this.socket.on('players', (data) => {
      console.log(data);
      this.setState({ players: data });
    });
  }

  render() {
    const { players } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <ul>
          {players.map((player) => (
            <p key={player}>{player}</p>
          ))}
        </ul>
        <AddPlayer socket={this.socket} />
      </div>
    );
  }
}

export default App;
