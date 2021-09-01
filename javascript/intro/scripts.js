//let yourName = prompt('What is your name?', 'Enter Name Here');
//  alert(`Why hello ${yourName}!`);

//let a = prompt("First number?", 1);
//let b = prompt("Second number?", 2);
//
//alert(+a + +b);

//console.log(24+53);
//console.log((4 + 6 + 9) / 77);
//let a = 10;
//console.log(a);
//
//const max = 57;
//let actual = max - 13;
//let percentage = actual / max;
//console.log(percentage);
// Add your code here

//let quoteStart = 'Don\'t judge each day by the harvest //you reap, ';
//let quoteEnd = 'but by the seeds that you plant.'
//let finalQuote = quoteStart + quoteEnd;
//console.log(finalQuote);
//
//let quote = 'I do not like green eggs and ham. I do not //like them, Sam-I-Am.';
//let substring = 'green eggs and ham';
//let quoteLength = quote.length;
//let index = quote.indexOf('green eggs and ham.');
//let revisedQuote = quote.slice(0, index) + substring;
//console.log(quoteLength);
//console.log(revisedQuote);
//
//let quote2 = 'I dO nOT lIke gREen eGgS anD HAM';
//
//let fixedQuote = 'I' + quote2.slice(1).toLowerCase().//replace('green eggs and ham', 'mayonnaise and pastrami');
//let finalQuote2 = fixedQuote + '.';
//console.log(finalQuote2)
//    
//let theorem = 'Pythagorean theorem';
//let a = 5;
//let b = 8;
//let myString = `Using ${theorem}, we can work out that //that if the two shortest sides of a right-angled triangle //have lengths of ${a} and ${b}, the length of the //hypotenuse is ${(a**2+b**2)**(1/2)}.`;
//console.log(myString);
//
//let greetings = ['Happy Birthday!',
//                 'Merry Christmas my love',
//                 'A happy Christmas to all the family',
//                 'You\'re all I want for Christmas',
//                 'Get well soon'];
//
//for (let i = 0; i < greetings.length; i++) {
//  let input = greetings[i];
//  // Your conditional test needs to go inside the //parentheses
//  // in the line below, replacing what's currently there
//  if (greetings[i].indexOf('Christmas') !== -1) {
//    console.log(input);
//  }
//}
//
//let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', //'liVERpoOL'];
//
//for (let i = 0; i < cities.length; i++) {
//  let input = cities[i];
//  // write your code just below here
//  let correctCase = input.slice(0,1).toUpperCase() + //input.toLowerCase().slice(1);
//  let result = correctCase;
//  console.log(result);
//}
//
//let stations = [
// 'MAN675847583748sjt567654;Manchester Piccadilly',
//'GNF576746573fhdg4737dh4;Greenfield',
//'LIV5hg65hd737456236dch;Lime Street',
//'SYB4f65hf75f736463;Stalybridge',
//'HUD5767ghtyfyr465dh7;Huddersfield'
//];
//for (let i = 0; i < stations.length; i++) {
//  let input = stations[i];
//  // write your code just below here
//  let code3 = stations[i].slice(0,3);
//  let semi = stations[i].indexOf(';');
//  let noNum = stations[i].slice(semi);
//
//  let result2 = `${code3}${noNum.replace(';',': ')}`;
//  console.log(result2);
//}
//
//let who = prompt('Who\'s there?');
//if (who === 'admin') {
// let pass = prompt('Enter Password');
// if (pass === 'KeyMaster') {
//  alert('Welcomed');
// }
// else if (pass === '') {
//  alert('Cancelled');
// }
// else alert('Wrong Password');
//}
//
//else if (who === '') {
// alert('Cancelled');
//}
//
//else alert('I don\'t know you')

const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.onchange = function() {
  const choice = select.value;

  // ADD CONDITIONAL HERE
  if (choice = 'January' || 'March' || 'May' || 'July' ||  'August' || 'October' || 'December') {
   days = 31;
  }
  else if (choice = 'April' || 'June' || 'September' ||  'November') {
   days = 30;
  }
  else days = 28;

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}
