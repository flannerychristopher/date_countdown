import React, { Component } from 'react';
import Clock from './Clock';
import DateList from './DateList';
import YearSelect from './components/YearSelect';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: '',
      year: '2018',
      inputDate: '',
      dateList: [
        { name: 'Christmas', date: 'December 25' },
        { name: 'Halloween', date: 'October 31' },
        { name: 'Valentines', date: 'February 14' },
        { name: 'MLK Day', date: 'January 15' },
        { name: 'Independence Day', date: 'July 4' }
      ]
    }
  }

  componentWillMount() {
    this.setState({
      deadline: this.calculateOneYear()
    });
  }

  calculateOneYear() {
    let year = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December']
    return `${months[year.getMonth() + 1]} ${year.getDate()}`
  }

  onDateInput() {
    this.setState({
      deadline: this.state.inputDate
    });
  }

  onYearChange(event) {
    console.log(event.target.value)
    this.setState({
      year: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Countdown</h1>
        <h3>{this.state.deadline}, 
          <YearSelect
            value={this.state.year}
            onYearChange={this.onYearChange.bind(this)}
          />
        </h3>
        <Clock deadline={this.state.deadline} year={this.state.year} />
        <div>
          <input
            placeholder='type a month and date'
            onChange={e => this.setState({ inputDate: e.target.value })}
          />

          <button onClick={() => this.onDateInput()}>
            Submit
          </button>
        </div>
        <DateList
          onDateSelect={deadline => this.setState({ deadline })}
          dateList={this.state.dateList}
        />
      </div>
    )
  }
}   