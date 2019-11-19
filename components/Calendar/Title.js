import React, { useContext } from 'react';
import { CalendarContext } from './context/CalendarContext';
import styled from 'styled-components';
const StyledTitle = styled.h2`
  text-align: center;
`;

const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Title = React.memo(() => {
  const {
    state: { month, year },
  } = useContext(CalendarContext);
  return (
    <StyledTitle>
      {Months[month - 1]} {year}
    </StyledTitle>
  );
});

export default Title;
