import {DateTime} from 'luxon';

const nowTime = DateTime.now();
const marriedDate = DateTime.fromISO('2018-10-13T18:30:00', { zone: "Europe/Paris" });
const diffYears = nowTime.diff(marriedDate, 'years', {conversionAccuracy: 'longterm'}).toObject();
const diffMonths = nowTime.diff(marriedDate, 'months', {conversionAccuracy: 'longterm'}).toObject();
const diffDays = nowTime.diff(marriedDate, 'days', {conversionAccuracy: 'longterm'}).toObject();

const yearsGone = diffYears.years ? Number(diffYears.years.toFixed()) : 0;
const monthsGone = diffMonths.months ? Number(diffMonths.months.toFixed()) : 0;
const daysGone = diffDays.days ? Number(diffDays.days.toFixed()) : 0;

const Hearts = () => {
  let hearts = '';
  for (let i = 0; i < yearsGone; i++) {
    hearts += '❤️';
  }
  return <div className="text-9xl justify-self-center text-center">{hearts}</div>;
}

const DayHearts = () => {
  let hearts = '';
  for (let i = 0; i < daysGone; i++) {
    hearts += '❤️';
  }
  return <div className="justify-self-center">{hearts}</div>;
}

const MonthHearts = () => {
  let hearts = '';
  for (let i = 0; i < monthsGone; i++) {
    hearts += '❤️';
  }
  return <div className="text-5xl justify-self-center">{hearts}</div>;
}

export default Hearts;
export { DayHearts, MonthHearts, daysGone, monthsGone, yearsGone }