import { DateTime } from './luxon.js';

const now = DateTime.now();

const daySuffix = (day) => {
  const newDay = day.toString();
  const lastChar = newDay.length - 1;
  if (newDay[lastChar] === '1') {
    return 'st';
  } if (newDay[lastChar] === '2') {
    return 'nd';
  } if (newDay[lastChar] === '3') {
    return 'rd';
  }
  return 'th';
};

const getTimeSuffix = (time) => (time < 12 ? 'AM' : 'PM');

const insertDate = () => {
  const navbar = document.querySelector('header');

  const dateEl = document.createElement('div');
  dateEl.classList.add('date');
  dateEl.innerHTML = `${now.monthLong} ${now.day}<sup>${daySuffix(now.day)}</sup> ${now.year}, 
    ${now.hour}:${now.minute}:${now.second} ${getTimeSuffix(now.second)}`;
  navbar.appendChild(dateEl);
};

export default insertDate;