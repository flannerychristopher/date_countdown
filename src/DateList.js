import React from 'react';
import DateListItem from './components/DateListItem';
import _ from 'lodash';
import './App.css';

const DateList = props => {
  const dateItems = props.dateList.map(date => {
    return <DateListItem date={date} key={date.name} />
  });

  return (
    <div>
      {dateItems}
    </div>
  );
}

export default DateList;