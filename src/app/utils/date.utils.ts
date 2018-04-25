
export const dateTimeToDate = (date: Date, time: string): Date => {
  const splitTime = time.split(':');
  const hours = parseInt(splitTime[0]);
  const minutes = parseInt(splitTime[1]);

  date.setUTCHours(hours);
  date.setUTCMinutes(minutes);
  return date;
}

export const getHoursFromTimeString = (timeString: string): number {
  const splitTime = timeString.split(':');
  const hours = parseInt(splitTime[0]);
  return hours;
}

export const getMinutesFromTimeString = (timeString: string): number {
  const splitTime = timeString.split(':');
  const minutes = parseInt(splitTime[1]);
  return minutes;
}

export const getTimeStringFromDate = (date: Date | string): string => {
  date = new Date(date);
  const hours = pad(date.getHours(), 2);
  const minutes = pad(date.getMinutes(), 2);
  return `${hours}:${minutes}`;
}

const pad = (initial: number, size: number) => {
  let s = initial.toString();
  while (s.length < (size || 2)) { s = "0" + s; }
  return s;
}

const weekday: Array<string> = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const getFormattedWeekDay = (date: Date | string): string => {
  if (date instanceof Date) {
    return this.weekday[date.getDay()];
  }
  date = new Date(date);
  return this.weekday[date.getDay()];
}

const getFormattedMonthDay = (date: Date | string): string => {
  if (date instanceof Date) {

  } else {
    date = new Date(date);
  }

  const day = date.getDate();
  if (day % 10 === 1 && day !== 11) {
    return `${day}st`;
  }
  if (day % 10 === 2 && day !== 12) {
    return `${day}nd`;
  }

  if (day % 10 === 3 && day !== 13) {
    return `${day}rd`;
  }
  return `${day}th`;
}

export const getFormattedDate = (date: Date): string => {
  return `${getFormattedMonthDay(date)} of ${date.getMonth()} ${date.getFullYear()}`;
}
