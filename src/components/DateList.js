import React from 'react';
import DateListItem from './DateListItem';
import '../App.css';

const DateList = props => {
  const dateItems = props.dateList.map(date => {
    return <DateListItem onDateSelect={props.onDateSelect} date={date} key={date.name} />
  });

  return (
    <div>
      {dateItems}
    </div>
  );
}

export default DateList;