var people = [
  {
    first_name: 'Clifford',
    last_name: 'Hasloch',
    gender: 'Male',
    age: 28,
    isWearingMask: false,
  },
  {
    first_name: 'Geralda',
    last_name: 'Soldan',
    gender: 'Female',
    age: 19,
    isWearingMask: false,
  },
  {
    first_name: 'Ianthe',
    last_name: 'Collidge',
    gender: 'Female',
    age: 24,
    isWearingMask: false,
  },
  {
    first_name: 'Radcliffe',
    last_name: 'Revill',
    gender: 'Male',
    age: 21,
    isWearingMask: true,
  },
  {
    first_name: 'Chane',
    last_name: 'Hearle',
    gender: 'Male',
    age: 15,
    isWearingMask: true,
  },
  {
    first_name: 'Yuma',
    last_name: 'Borsi',
    gender: 'Male',
    age: 20,
    isWearingMask: false,
  },
  {
    first_name: 'Pinchas',
    last_name: 'Duddin',
    gender: 'Male',
    age: 19,
    isWearingMask: true,
  },
  {
    first_name: 'Constantia',
    last_name: 'Enderle',
    gender: 'Female',
    age: 22,
    isWearingMask: true,
  },
  {
    first_name: 'Kerwinn',
    last_name: 'Gorhardt',
    gender: 'Male',
    age: 18,
    isWearingMask: true,
  },
  {
    first_name: 'Ludovico',
    last_name: 'Orenzel',
    gender: 'Male',
    age: 31,
    isWearingMask: true,
  },
];
// console.log(people);

// for(var i = 0; i < 2; i++) {
//   // console.log(people[i]);
// }

// var i = 0;
// // people.length = 10;
// while(i < people.length){
//   if(i % 2 === 0) {
//     // console.log(people[i]);
//   }
//   i++;
// }
// for(var person of people){ 
//     // console.log(person.first_name + ' ' + person.last_name);
// }

// // var array=[]
// // for(var person of people){
// // console.log(person.first_name,person.last_name)
// // array.push(person.first_name + ' ' + person.last_name)
// // }
// // console.log(array)

// var adults = []
// for(var person of people){
//   if(person.age >= 21){
//     adults.push(person.first_name + ' ' + person.last_name + ' ' + person.age);
//   }
// }
// console.log(adults)

// for(var person of people){
//   if(person.age > 21 && person.gender === 'Male'){
//     // console.log(person.first_name + ' ' + person.last_name);
//   }
// }

// var men = []
// var women = []
// for(var person of people) {
//   if(person.gender === 'Male'){
//     men.push(person.first_name + ' ' + person.last_name)
//   } else {
//     women.push(person.first_name + ' ' + person.last_name)
//   }
// }
// console.log(men)
// console.log(women)


// for(var index in people){
//   console.log(index);
// }

// 3.
// var lucky = []
// var unlucky = []
// for(var person of people) {
//   var random = Math.ceil(Math.random() * 100);
//   if(random >= 50 ){
//     lucky.push(person.first_name + ' ' + person.last_name)
//   } else {
//     unlucky.push(person.first_name + ' ' + person.last_name)
//   }
// }
// console.log('Lucky: ' + lucky)
// console.log('Unlucky: ' + unlucky)

// 4.
// If a persons first or last name starts with C, G, F, L, X or W they sadly cannot come in to the event.
// Write the alert/console message for which letter they cannot be admitted for.

var lucky = []
var unlucky = []
for(var person of people) {
  var cond1 = person.first_name[0];
  var cond2 = person.last_name[0];
  // var cond3 = person.first_name.indexOf('C')
  console.log(cond1)
  console.log(cond2)
  switch (cond1) {
    case 'C': 
      unlucky.push(person.first_name + ' ' + person.last_name)
      break;
    case cond1 = 'G':
      unlucky.push(person.first_name + ' ' + person.last_name)
      break;
    default:
      lucky.push(person.first_name + ' ' + person.last_name)
      break;
  }
}
console.log('Lucky: ' + lucky)
console.log('Unlucky: ' + unlucky)





/**
 * This is an array of objects of people who would like to go to an event.
 * Make an array of people attending an event, both first name and last name
 * and print their last and first name into console.
 *
 * Extra:
 * #1 The event they would like to go to is an 21+ event.
 * So everyone aged less than 21 cannot get inside.
 *
 * #2 Print out all males or females that went to the 21+ event.
 *
 * #3 For current safety reasons we must randomly give every person a 50% chance of getting in.
 *
 * #4 If a persons first or last name starts with C, G, F, L, X or W they sadly cannot come in to the event.
 * Write the alert/console message for which letter they cannot be admitted for.
 *
 *
 *  */

 //
var loopArray = ['This', 'is', 'just', 'some', 'text', 'separated'];
var number = 10
var stringLength = 'ThisIsAString'.length
function return10() {
  return 10
}
for(var i = 0; i < number; i++) {
  console.log('Currently on loop ' + i)
  i++
}

for (var text of loopArray) {
  console.log(text);
}

function loopingFunction(n, text){
  for(var i = 0; i <= n; i++){
    console.log(text + i);
  }
}
loopingFunction(5, 'Hello ');

var obj = {
  message: 'Hi again',
}
console.log(obj.message)
obj.message = 'Hi a third time'
console.log(obj.message)