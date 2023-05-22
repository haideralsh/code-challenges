// https://www.hackerrank.com/challenges/day-of-the-programmer/problem

// February started on the 14th in 1918 in Russia 
// in order to switch from the Julian to the Gregorian calendar system. 
// February had 28 days since 1918 was not a leap year.
const DAYS_LOST_IN_1918 = 28 - 14;

type Calendar = "Julian" | "Gregorian";

function findCalendar(year: number): Calendar {
  return year <= 1917 ? "Julian" : "Gregorian";
}

function isLeapYear(year: number, calendar: Calendar): boolean {
  switch (calendar) {
    case "Julian":
      return year % 4 === 0;

    case "Gregorian":
      return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }
}

function dayOfProgrammer(year: number): string {
  if (year === 1918) return `${12 + DAYS_LOST_IN_1918}.09.1918`;

  let calendar = findCalendar(year);

  if (isLeapYear(year, calendar)) return `12.09.${year}`;
  else return `13.09.${year}`;
}
