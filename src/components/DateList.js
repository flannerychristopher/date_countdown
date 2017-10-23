import React from 'react';
import DateListItem from './DateListItem';
import '../App.css';

const DateList = ({ dateList, onDateSelect }) => {
  const dateItems = dateList.map(date => {
    return <DateListItem onDateSelect={onDateSelect} date={date} key={date.name} />
  });

  return (
    <div>
      {dateItems}
    </div>
  );
}


export default DateList;