import React from 'react';
import styled from 'styled-components';

const days = ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT'];

const Days = styled.article`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  p {
    text-align: center;
  }
`;
const DayNames = () => {
  return (
    <Days>
      {days.map((day, i) => {
        return <p key={`dayname-${i}`}>{day}</p>;
      })}
    </Days>
  );
};

export default DayNames;
