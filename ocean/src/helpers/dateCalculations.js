export const getDateMonth = () => {
  let tempDate = new Date();
  let date = tempDate.getDate();
  let month = tempDate.getMonth() + 1;

  return [date, month];
};

// TODO : check the incoming date format, handle split, convert to array maybe?
// create new date obj.
export const makeJSDateObject = (date) => {
  new Date(date);
};

export const dateCalculator = (curDate, futureDate) => {
  let dateDiff = futureDate - curDate;

  return Math.floor(dateDiff / (1000 * 60 * 60 * 24));
};

/**
 * Parses the date
 * @param {string} date in the form of MM/DD/YYYY
 * @returns a JS date object
 */
export const dateParser = (date) => {
  let parsedDate = Date.parse(date);
  return parsedDate;
};

export const sortByDate = (array) => {
  array.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  return array;
};
