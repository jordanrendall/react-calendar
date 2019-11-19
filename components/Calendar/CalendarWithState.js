import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { CalendarContext } from './context/CalendarContext';
import { getMonthStructure, getPrevMonthDays } from './calendarFunctions';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Day from './Day';
import DayNames from './DayNames';
import Title from './Title';

const Header = styled.article`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
`;

const StyledCalendar = styled.article`
  width: 55vw;
  height: 50vw;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);

  .week {
    border-top: 1px solid black;
  }

  .week:last-child {
    border-bottom: 1px solid black;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  border-radius: 1rem;
  box-shadow: 0 0 1rem silver;
  padding: 1rem;
`;

const CalendarWithState = () => {
  const context = useContext(CalendarContext);
  const {
    state: { month, year, firstDay, lastDay, numberOfDays },
    setState,
  } = context;
  const [isCalendarLoading, setIsCalendarloading] = useState(true);
  const [monthArray, setMonthArray] = useState([]);
  useEffect(() => {
    const result = getMonthStructure(year, month);
    setState(prevState => ({
      ...prevState,
      firstDay: result.firstDay,
      lastDay: result.lastDay,
      numberOfDays: result.numberOfDays,
    }));

    const prevMonth = getPrevMonthDays(year, month);
    let monthNumbers = Array.from(
      { length: result.numberOfDays },
      (v, k) => k + 1
    );
    if (result.firstDay !== 0) {
      for (var i = 0; i < result.firstDay; i++) {
        monthNumbers.unshift(prevMonth - i);
      }
    }
    var j = 1;
    for (var i = 35 - result.numberOfDays - result.firstDay; i > 0; i--) {
      monthNumbers.push(j);
      j++;
    }
    setIsCalendarloading(false);
    setMonthArray(monthNumbers);
  }, [year, month]);
  return (
    <>
      <h1>React Calendar</h1>
      {!isCalendarLoading && (
        <>
          <StyledCalendar>
            <Header>
              <LeftArrow />
              <Title />

              <RightArrow />
            </Header>
            <DayNames />
            {monthArray.map((day, i) => {
              return (
                <Day
                  key={`day-${day}-${i}`}
                  number={day}
                  shaded={i < firstDay || i > numberOfDays + firstDay - 1}
                />
              );
            })}
          </StyledCalendar>
        </>
      )}
    </>
  );
};

export default CalendarWithState;
