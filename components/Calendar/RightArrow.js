import { useContext } from 'react';
import { getMonthStructure } from './calendarFunctions';
import { CalendarContext } from './context/CalendarContext';

const RightArrow = () => {
  const context = useContext(CalendarContext);
  const {
    state: { month, year },
  } = context;

  return (
    <button
      onClick={async () => {
        let newYear, newMonth;
        if (month < 12) {
          context.setState(prevState => ({
            ...prevState,
            month: month + 1,
          }));
          newYear = year;
          newMonth = month + 1;
        } else {
          context.setState(prevState => ({
            ...prevState,
            month: 1,
            year: year + 1,
          }));

          newYear = year + 1;
          newMonth = 1;
        }
        const monthStructure = getMonthStructure(newYear, newMonth);
        context.setState(prevState => ({
          ...prevState,
          firstDay: monthStructure.firstDay,
          lastDay: monthStructure.lastDay,
          numberOfDays: monthStructure.numberOfDays,
        }));
      }}
    >{`>`}</button>
  );
};

export default RightArrow;
