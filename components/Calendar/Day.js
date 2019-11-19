import React, { useContext } from 'react';
import styled from 'styled-components';
import { CalendarContext } from './context/CalendarContext';
const StyledDay = styled.article`
  display: grid;
  justify-content: center;
  padding: 5px;
  :hover {
    background: hsla(0, 0%, 0%, 0.2);
    transition: background 0.2s;
  }
  ${props => props.shaded && `background: silver`}
`;

const Day = React.memo(({ number, shaded }) => {
  const context = useContext(CalendarContext);
  const {
    state: { month, year },
  } = context;
  return (
    <StyledDay
      className='day'
      id={`${year}/${month}/${number}`}
      shaded={shaded}
    >
      {number}
    </StyledDay>
  );
});

export default Day;
