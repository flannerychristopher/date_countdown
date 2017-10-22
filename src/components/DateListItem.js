import React from 'react';

const DateListItem = ({ date, onDateSelect }) => {
  return (
    <li onClick={() => onDateSelect(date.date)} >
      {date.name}: {date.date}
    </li>
  );
}

export default DateListItem;