import React from 'react';
// import { useStateValue } from '../../context/GlobalState';
import { CalendarProvider } from './context/CalendarContext';
import CalendarWithState from './CalendarWithState';

const Calendar = () => {
  return (
    <CalendarProvider>
      <CalendarWithState />
    </CalendarProvider>
  );
};

export default Calendar;
