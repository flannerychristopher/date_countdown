import React, { Component } from 'react';
import Clock from './components/Clock';
import DateList from './components/DateList';
import TextInput from './components/TextInput';
import YearSelect from './components/YearSelect';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: '',
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
      selectedDate: this.getMonthAndDate()
    });
  }

  getMonthAndDate() {
    let year = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December']
    return `${months[year.getMonth()]} ${year.getDate()}`
  }

  onDateInput() {
    this.setState({
      selectedDate: this.state.inputDate
    });
  }

  onYearChange(year) {
    this.setState({ year });
  }

  render() {
    return (
      <div className="App">
        <h1>Countdown</h1>
        <h2>{this.state.selectedDate}, </h2>

        <YearSelect
          value={this.state.year}
          onYearChange={this.onYearChange.bind(this)}
        />

        <Clock formatted_date={this.state.selectedDate+' '+this.state.year} />

        <TextInput
          onInputChange={event => this.setState({ inputDate: event.target.value })}
          onDateInput={this.onDateInput.bind(this)}
        />

        <DateList
          onDateSelect={selectedDate => this.setState({ selectedDate })}
          dateList={this.state.dateList}
        />
      </div>
    )
  }
}   