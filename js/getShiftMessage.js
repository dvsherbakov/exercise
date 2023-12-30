const SUNDAY = 0;
const MONDAY = 1;
const TUESDAY = 2;
const WEDNESDAY = 3;
const THURSDAY = 4;
const FRIDAY = 5;
const SATURDAY = 6;

function getShiftMessage(shifts, date) {
  return ' '
}

const schedule = [
  { day: MONDAY, start: "14:00", end: "22:00" },
  { day: TUESDAY, start: "07:15", end: "14:04" },
  { day: TUESDAY, start: "15:15", end: "03:00" },
  { day: WEDNESDAY, start: "20:00", end: "08:00" },
  { day: FRIDAY, start: "08:00", end: "23:00" },
  { day: SUNDAY, start: "14:00", end: "18:00" }
];

console.log(getShiftMessage(schedule,
    new Date("Wed Jun 02 2015 08:00:00 GMT")))


console.log(getShiftMessage(schedule,
    new Date("Wed Jun 04 2015 23:30:00 GMT")))


console.log(getShiftMessage(schedule,
    new Date("Wed Jun 05 2015 23:30:00 GMT")))
