const spm = 60;
const mph = 60;
const hpd = 24;
const dpw = 7;
const wpy = 52;

const spd = spm * mph * hpd;

console.log(`there are ${spd} seconds in a day`);

const yearsAlive = 24.5;

const secondsLiving = spd * dpw * wpy * yearsAlive;

console.log(`I;ve been alive for more than ${secondsLiving} seconds!`)

