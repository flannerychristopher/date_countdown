import React, { Component } from 'react';
import Clock from './Clock';
import DateList from './DateList';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      inputDeadline: '',
      dateList: [
        { name: 'Christmas', date: 'December 25, 2017' },
        { name: 'Halloween', date: 'October 31, 2017' },
        { name: 'Valentines', date: 'February 14, 2018' },
        { name: 'MLK Day', date: 'January 15, 2018' },
        { name: 'Independence Day', date: 'July 4, 2018' }
      ]
    }
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.inputDeadline
    });
  }

  render() {
    return (
      <div className="App">
        <h3>Date Countdown to {this.state.deadline}</h3>
        <Clock deadline={this.state.deadline} />
        <div>
          <input 
            placeholder='input a date'
            onChange={e => this.setState({ inputDeadline: e.target.value })} 
          />
          <button onClick={() => this.changeDeadline()}>
            Submit
          </button>
        </div>
        <DateList dateList={this.state.dateList} />
      </div>
    )
  }
}   