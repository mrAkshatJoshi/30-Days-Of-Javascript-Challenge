//level1
const yourage = parseInt(prompt('please insert your age:'))
if (yourage>=18)
console.log('You are allowed to vote/drive.')
else console.log(`You are left with ${18-yourage} years to vote/drive.`)//Q1
const myage = parseInt(prompt('please input my age:'))
if (yourage>myage){
console.log(`You are ${yourage-myage} years older than me.`)}
else if(yourage == myage){
console.log('We are same age')}
else console.log(`You are ${myage-yourage} years younger than me.`)//Q2
let a = 4; let b = 3;
//way1 
a > b 
? console.log(a+ " is greater than "+ b)
: console.log(a+ " is lesser than "+ b)
//way2
if (a > b) console.log(a, " is greater than ", b)
else console.log(a, " is lesser than ", b)//Q3

const value = parseInt(prompt('Enter a value:'))
if (typeof value == "number"){
    if(value % 2 == 0){
      console.log(`Given ${value} is an even number`)
    }
    else console.log(`Given ${value} value is an odd number`)
}
else console.log('INVAID! value')//Q4

//level2
const score = parseInt(prompt('please input your score:'))
if(score>100 || score<0 || typeof(score)!="number"){
    console.log('error score')
}
else if(score>=80 && score<=100){
    console.log('your grade is A')
}
else if(score>=70 && score<80){
    console.log('your grade is B')
}
else if(score>=60 && score<70){
    console.log('your grade is C')
}
else if(score>=50 && score<60){
    console.log('your grade is D')
}
else console.log('your grade is F')//Q1

const month = prompt('please input the month: ').toLowerCase()
var season
switch (month) {
    case 'september':
    case 'october': 
    case 'november':
        season = 'Autumn' 
        console.log("Season is: ", season)      
        break;
    case 'december':
    case 'january':
    case 'february':
        season = 'Winter'
        console.log("Season is: ", season)
        break
    case 'march':
    case 'april':
    case 'may':
        season = 'Spring'
        console.log("Season is: ", season)
    case 'june':
    case 'july':
    case 'august':
        season = 'Summer'
        console.log("Season is: ", season)
        break
default:
     console.log('month error')
}//Q2
const day = prompt('please input today\'s day:').toLowerCase()
switch(day){
    case 'saturday':
    case 'sunday':
        console.log(`${day} is a weekend`)
    break
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${day} is a weekday`)
    break
default:
    console.log('day error')
}//Q3
//level3
var year1 = parseInt(prompt('please enter a year:'))
const month1 = prompt('please enter a month:').toLowerCase()
var daysCount
if (Number.isNaN(year1) || (year1 <= 0)){ ////check year error
console.log('year error')} 
else if(typeof(year1) =="number"){
switch(month1){
   case 'january':
   case 'march':
   case 'may':
   case 'july':
   case 'august':
   case 'october':
   case 'december':
      daysCount = 31
      console.log(`daysCount is ${daysCount}`)
      break;
   case 'april':
   case 'june':
   case 'september':
   case 'november':
      daysCount = 30
      console.log(`daysCount is ${daysCount}`)
      break;
    case 'february':
        if((year1 % 4 == 0 && year1 % 100 != 0) || (year1 % 400 == 0)) //check leap year
        daysCount = 29
        else daysCount = 28
        console.log(`daysCount is ${daysCount}`)
        break
    default:
    console.log('month error')//check month error
    break
}
}//Q1 & Q2