// Import stylesheets
import './style.css';
// Write Javascript code!
const appDiv = document.getElementById('app');
const MOCK = {
  '[1876462913074500635, "Montgomery"]': 99,
  '[1876462917495297055, "Dothan"]': 106,
  '[1876462903259829266, "Jackson"]': 44,
  '[1876462896280507403, "Albertville"]': 92,
  '[1876462901053625360, "Tuscaloosa"]': 62,
  '[1876462886985929731, "Decatur"]': 173,
  '[1876462889083081732, "Huntsville No"]': 125,
  '[1876462918518707232, "Auburn"]': 66,
  '[1876462907898729494, "Birmingham So"]': 108,
  '[1954067063605564458, "Knoxville West"]': 99,
  '[1876462902177698833, "Nashville SW"]': 107,
  '[1876462899971494927, "Rome"]': 72,
  '[1876462908947305495, "Atlanta SE"]': 59,
  '[1876462904375514131, "Marietta"]': 56,
  '[1876462916471886878, "Knoxville Comm"]': 3,
  '[1876462920624247842, "Gainesville"]': 33,
  '[1876462928106886184, "Pensacola"]': 35,
  '[1876462912034313242, "Madison Comm"]': 4,
  '[1876462892723737608, "Shelbyville"]': 90,
  '[1876462914349569052, "Nashville Comm"]': 1,
  '[1876462905466033172, "Atlanta NE"]': 55,
  '[1876462926999589927, "Warner Robins"]': 18,
  '[1876462926001345574, "Valdosta"]': 12,
  '[1876462894971884554, "Gadsden"]': 107,
  '[1876462891381560326, "Cullman"]': 113,
  '[1876462898696426509, "Knoxville East"]': 106,
  '[1876462919550506017, "Sharpsburg"]': 48,
  '[1876462897605907468, "Chattanooga"]': 91,
  '[1876462922973058084, "Nashville NE"]': 112,
  '[1876462909987492888, "Mobile"]': 101,
  '[1876462924852106277, "Huntsville S"]': 144,
  '[1876462906741101589, "Memphis"]': 102,
  '[1876462893864588297, "Birmingham No"]': 93,
  '[1876462890232321029, "Florence"]': 126,
  '[1876462921907704867, "Olive Branch"]': 33,
};
// grab everything between double quotes: '[1876462913074500635, "Montgomery"]'
const REGEX = /"(.*?)"/; // eslint-disable-line

let arr = [];

let manips = (data) => {
  let dataKeys = Object.keys(data);
  for (let i = 0; i < dataKeys.length; i++) {
    let akey = Object.getOwnPropertyNames(data)[i].match(REGEX)[1];
    let aval = data[dataKeys[i]];
    arr.push({
      name: akey,
      count: aval,
    });
    appDiv.innerHTML = appDiv.innerHTML + `<h5>${arr[i]['name']}</h5>`;
  }
};

manips(MOCK);
