//level 1    
let firstName = "Akshat";
let lastName = "Joshi";
let country = "India";
let city = "Bangalore";
let age = 24;
let isMarried = false;
let year = 2022;
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);//Q1
console.log(typeof('10') == 10)//Q2
console.log(parseInt(9.8) == 10)//Q3
let q4 = true
? console.log('Write three JavaScript statement which provide truthy value')
: console.log('Write three JavaScript statement which provide falsy value') //Q4
console.log(true, true, false, false, true, true, false, false, false, true, false);//Q5
console.log(true, false, true, true, false, true, true, false, true, true, false);//Q6
const date = new Date
console.log(date.getFullYear())//Q7 i
console.log(date.getMonth()+1)//Q7 ii
console.log(date.getUTCDate())//Q7 iii
console.log(date.getDay())//Q7 iv
console.log(date.getHours())//Q7 v
console.log(date.getMinutes())//Q7 vi
console.log(Date.now())//Q7 vii
//Level 2
const base = prompt('please insert base: ')
const height = prompt('please insert height: ')
console.log('area is ',base*height*0.5)//Q1
const side_1 = prompt('Enter side 1:')
const side_2 = prompt('Enter side 2:')
const side_3 = prompt('Enter side 3:')
console.log('The perimeter of the triangle is ',parseInt(side_1)+parseInt(side_2)+parseInt(side_3))//Q2
const height1 = prompt('Enter side height1:')
const width = prompt('Enter side width:')
console.log('The perimeter of the rectangle is ',2*(parseInt(height1)+parseInt(width)))
console.log('The area of the rectangle is ',parseInt(height1)*parseInt(width))//Q3
const radius = parseInt(prompt('Enter radius:'))
console.log('The circumference of a circle ',2*Math.PI*radius)
console.log('The area of the circle is ',Math.PI*radius*radius)//Q4
const slope1 = 2
const x_intercept = 2
const y_intercept = -2 //Q5
const slope2 = (10-2)/(6-2)//Q6
const compare_slope = slope1 < slope2
? console.log('slope1 < slope2')
: console.log('slope1 > slope2')//Q7
//ax*x+b*x+c=0
const a = parseFloat(prompt('quadratic equation is ax*x+b*x+c=0, please input a: '))
const b = parseFloat(prompt('quadratic equation is ax*x+b*x+c=0, please input b: '))
const c = parseFloat(prompt('quadratic equation is ax*x+b*x+c=0, please input c: '))
const delta = (b*b-4*a*c) >= 0
? console.log('x1= ',parseFloat((-b+Math.sqrt(b*b-4*a*c))/(2*a)),'\nx2= ', parseFloat((-b-Math.sqrt(b*b-4*a*c))/(2*a)))
: console.log('error') //Q8
const hour = parseFloat(prompt('please insert hours: '))
const rate_per_hour = parseFloat(prompt('please insert rate_per_hour:'))
console.log('Enter hours:',hour,'\nEnter rate per hour:',rate_per_hour,'\nYour weekly earning is ',parseFloat(hour*rate_per_hour))//Q9
const your_name = 'akshatjoshi'
const length_name = parseInt(your_name.length) >= 7
? console.log(`Your name is long`)
: console.log(`Your name is short`)//Q10
let firstName1 = 'Akshat'
let lastName1 = 'Joshi'
const compare_name = firstName1.length >= lastName1.length
? console.log(`Your first name, ${firstName1} is longer than your family name, ${lastName1}`)
: console.log(`Your first name, ${firstName1} is shorter than your family name, ${lastName1}`)//Q11
let myAge = 24;
let yourAge = 01;//(^J^)pun intended
console.log(`I am ${myAge - yourAge} years older than you!`);//Q12
let birthyear = parseInt(prompt('Enter Your birth year:'))
let compare_year  = (parseInt(date.getFullYear()) - birthyear) >= 18
? console.log(`You are ${(parseInt(date.getFullYear()) - birthyear)}. You are allowed to vote/drive`)
: console.log(`You are ${(parseInt(date.getFullYear()) - birthyear)}. Yoou will be allowed to vote/drive after ${18-(parseInt(date.getFullYear()) - birthyear)} years.`)//Q13
const years_lived = parseInt(prompt('Enter number of years you completed on EARTH: '))//(^J^)pun intended
console.log(`You lived ${years_lived*365*24*60*60} seconds.`)//Q14
console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`)//Q15 I
console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`)//Q15 II
console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`)//Q15 III
//level 3
var month_level3 = (date.getMonth()+1)
month_level3 >= 10
? month_level3
: month_level3 =`0${month_level3.toString()}`
var date_level3 = date.getDate()
date_level3 >=10
? date_level3
: date_level3 = `0${date_level3.toString()}`
var hour_level3 = date.getHours()
hour_level3>=10
?hour_level3
:`0${hour_level3.toString()}`
var min_level3 = date.getMinutes()
min_level3 >=0
? min_level3
: `0${min_level3.toString()}`
console.log(`${date.getFullYear()}-${month_level3}-${date_level3} ${hour_level3}:${min_level3}`)