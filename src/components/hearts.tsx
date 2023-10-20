const today = new Date();
const datoGift = new Date('2018-10-13');
const diff = today.getTime() - datoGift.getTime();
const msPerDay = 1000 * 60 * 60 * 24;
const daysGone = Math.round(diff / msPerDay);
const msPerMonth = 1000 * 60 * 60 * 24 * 30.44;
const monthsGone = Math.floor(diff / msPerMonth);
const yearsGone = Math.floor(monthsGone / 12);
console.log(yearsGone)


const Hearts = () => {
  let hearts = '';
  for (let i = 0; i < yearsGone; i++) {
    hearts += '❤️';
  }
  return <div className="text-9xl justify-self-center">{hearts}</div>;
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