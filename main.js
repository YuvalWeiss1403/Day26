
//ex2-1
const z =[1,2,3,4,5];
const doublez = z.map(number=>number*2);
console.log(doublez);

//ex2-2
const ages =[21,34,25,28];
const stringAges = ages.map(age=>`${age}`);
console.log(stringAges);

//ex2-3
const str ="woop";
const arrstr =str.split("");
const strToUpper = arrstr.map(char=>char.toUpperCase());
console.log(strToUpper.join(""));

const employees = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Bob', age: 35}
    ];
const employeesName = employees.map(employee => employee.name);
console.log(employeesName);

//ex2-4
const arr=[1,2,3];
const multiplyByIndex = arr.map((number,index)=>number*index);
console.log(multiplyByIndex);

//ex2-5
const input = [
    {
        name:"John",
        age:13,
    },
    {
        name:"Mark",
        age:56,
    },{
        name:"Rachel",
        age:45,
    },{
        name:"Nate",
        age:67,
    },
    {
        name:"Jeniffer",
        age:65,
    }
];

const inputages = input.map(member =>member.age);
const target = [Math.min(...inputages),Math.max(...inputages),Math.max(...ages)-Math.min(...inputages)];
console.log(target);

// EX3 - forEach Practice
//ex1

const numberArray =[12,34,23,54];
let numberSum=0;
const totalSum=numberArray.forEach(number=>numberSum+=number);
console.log(numberSum);

//ex2

const temp = [1,2,3];
const doubleValues= temp.forEach((number,index) =>{number*2});
console.log(doubleValues);

//ex3

const strTemp = ["Yuval","Hagar","Ido"];
const replaceVowels = strTemp.map(str => str.replace(/[aeiou]/gi, 'x'));
console.log(replaceVowels);

//ex4

const employees2 = [
    { name: "John", age: 30 },
    { name: "Jane", age: 15 },
    { name: "Bob", age: 35 },
   ];

const checkAge = employees2.forEach((employeeObject,index) =>{if(employeeObject.age<20) {console.log(`The person at index ${index} is too young.`)}});

const updateEmployees = employees2.forEach((employeeObject,index)=> (employeeObject.age>25) ? employeeObject.isAdult = true:employeeObject.isAdult = false);
console.log(employees2);

//EX3 - filter Practice
//ex1

const numberArray2 = [3,6,8,2];
const evenNumber = numberArray2.filter(number=>number%2===0);
console.log(evenNumber);

//ex2
const str2 = [3,6,8,2];
const fiveAndGreaterOnly =str2.filter(number => number>=5)
console.log(fiveAndGreaterOnly);

const people = [
    { name: "Angelina Jolie", isClubMember: true },
    { name: "Eric Jones", isClubMember: false },
    { name: "Paris Hilton", isClubMember: true },
    { name: "Kayne West", isClubMember: false },
    { name: "Bob Ziroll", isClubMember: true }
];

const filterClubMembers = people.filter(person => person.isClubMember===true);
console.log(filterClubMembers);

//EX3 - find Practice
//ex1
const array1 = [5, 12, 8, 130, 44];
const aboveTen = array1.find(number =>number>10);
console.log(aboveTen);

//ex2
const students = [ 
    { name: 'John', age: 22 },
      { name: 'Jane', age: 23 },
      { name: 'Bob', age: 24 },
      { name: 'Alice', age: 25 }
   ];

const findStudent =students.find(student => student.name === 'Bob');
console.log(findStudent);

const olderThan23 = students.find(student => student.age>23);
console.log(olderThan23);


//EX3 - reduce Practice
//ex1

const input2 = [1,-4,12,0,-3,29,-150];
const calculateSum = input2.reduce((sumPositive, currentValue) => currentValue>=0 ? sumPositive+currentValue : 0+sumPositive,0);
console.log(calculateSum);

//ex2
