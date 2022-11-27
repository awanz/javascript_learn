const date = new Date();
console.log(date);

const dateAssign = new Date("2022-11-25");
console.log(dateAssign);

const dateYearMonth = new Date(2022, 11);
console.log(dateYearMonth);

const dateYearMonthDay = new Date(2022, 11, 25);
console.log(dateYearMonthDay);

const dateYearMonthDayHour = new Date(2022, 11, 25, 10);
console.log(dateYearMonthDayHour);

const dateYearMonthDayHourMinute = new Date(2022, 11, 25, 10, 30);
console.log(dateYearMonthDayHourMinute);

const dateYearMonthDayHourMinuteSecond = new Date(2022, 11, 25, 10, 30, 50);
console.log(dateYearMonthDayHourMinuteSecond);

const dateYearMonthDayHourMinuteSecondMillisecond = new Date(2022, 11, 25, 10, 30, 50, 100);
console.log(dateYearMonthDayHourMinuteSecondMillisecond);

const dateMilliseconds = new Date(1000000000000);
console.log(dateMilliseconds);

// display date
console.log(dateAssign.toDateString());
console.log(dateAssign.toISOString());
console.log(dateAssign.toUTCString());
