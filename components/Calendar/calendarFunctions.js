export const getNumberOfDays = (year, month) => {
  if (month > 12 || !year || !month) return 0;
  return new Date(year, month, 0).getDate();
};

export const getPrevMonthDays = (year, month) => {
  if (month > 12 || !year || !month) return 0;
  if (month > 1) {
    return new Date(year, month - 1, 0).getDate();
  } else {
    return new Date(year - 1, 12, 0).getDate();
  }
};
export const getNextMonthDays = (year, month) => {
  if (month > 12 || !year || !month) return 0;
  if (month < 12) {
    return new Date(year, month + 1, 0).getDate();
  } else {
    return new Date(year + 1, 1, 0).getDate();
  }
};

export const getMonthStructure = (year, month) => {
  if (month > 12 || !year || !month) return 0;
  const firstOfMonth = new Date(year, month - 1);
  console.log(numberOfDays);
  const firstDay = firstOfMonth.getDay();
  const lastOfMonth = new Date(year, month, 0);
  const lastDay = lastOfMonth.getDay();

  const numberOfDays = lastOfMonth.getDate();
  return { firstDay, lastDay, numberOfDays };
};

export const dayOfWeekAsString = index => {
  return [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ][index];
};
