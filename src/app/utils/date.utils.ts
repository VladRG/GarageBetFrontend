
export const dateTimeToDate = (date: Date, time: string): Date => {
  const splitTime = time.split(':');
  const hours = parseInt(splitTime[0], 10);
  const minutes = parseInt(splitTime[1], 10);

  date.setHours(hours);
  date.setMinutes(minutes);
  return date;
};

export const getHoursFromTimeString = (timeString: string): number => {
  const splitTime = timeString.split(':');
  const hours = parseInt(splitTime[0], 10);
  return hours;
};

export const getMinutesFromTimeString = (timeString: string): number => {
  const splitTime = timeString.split(':');
  const minutes = parseInt(splitTime[1], 10);
  return minutes;
};

export const getLocalDateTimeFromUtc = (utcDate: Date): Date => {
  const hours = utcDate.getHours();
  const minutes = utcDate.getMinutes();
  const offset = new Date().getTimezoneOffset() / 60;

  const response = new Date();

  let localTime = hours - offset;

  if (localTime / 24 === 1) {
    response.setDate(utcDate.getDate() + 1);
  } else if (localTime < 0) {
    response.setDate(utcDate.getDate() - 1);
  } else {
    response.setDate(utcDate.getDate());
  }

  localTime = localTime % 24;
  response.setHours(localTime);
  response.setMinutes(minutes);
  return response;
};

export const getTimeStringFromDate = (date: Date | string): string => {
  date = date instanceof Date ? date : new Date(date);
  const hours = pad(date.getHours(), 2);
  const minutes = pad(date.getMinutes(), 2);
  return `${hours}:${minutes}`;
};

const pad = (initial: number, size: number) => {
  let s = initial.toString();
  while (s.length < (size || 2)) { s = '0' + s; }
  return s;
};

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
};

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
};

export const getFormattedDate = (date: Date): string => {
  return `${getFormattedMonthDay(date)} of ${date.getMonth()} ${date.getFullYear()}`;
};
