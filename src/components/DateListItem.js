import React from 'react';

const DateListItem = props => {
  return <li>{props.date.name}: {props.date.date}</li>
}

export default DateListItem;