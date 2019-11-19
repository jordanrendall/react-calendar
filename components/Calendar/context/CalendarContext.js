import React, { createContext, useState } from 'react';

export const CalendarContext = createContext({
  state: {
    month: 11,
    year: 2019,
    firstDay: 0,
    lastDay: 0,
    numberOfDays: 0,
  },
});

export const CalendarProvider = ({ children }) => {
  const [state, setState] = useState({
    month: 11,
    year: 2019,
    firstDay: 0,
    lastDay: 0,
    numberOfDays: 0,
  });

  return (
    <CalendarContext.Provider value={{ state, setState }}>
      {children}
    </CalendarContext.Provider>
  );
};
