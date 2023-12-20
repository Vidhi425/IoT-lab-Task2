// let,var,const

// initializing the variable
let age;
// declaring the variable
age=30;
// hosting the var
console.log('age');

// intializing the const
const score=30

// data types-strings,numbers,booleans,null,undefined
// strings can have both '',""
const name ='john';
// number
const marks=30
// boolean
const isCool=true;
// null=empty
const x=null;
// undefined
let z;
// to know the datatype
console.log(typeof isCool)

// concatenation
console.log('my age is'+age );

// template literals
console.log(`my age is${age}`);

const hello=`my age is${age}`;
console.log(hello);

// to know the length of the data entered
const s ='hello world'

console.log(s.length);

// methods
// converting all the letter to uppercase
console.log(s.toUpperCase());

// substring
console.log(s.substring(0,5));

// craeting an array using split
const code='technology,code,IT,computers'

console.log(code.split(','))

// arrays-holds multiple values

const numbers= new Array(1,2,3,4,5)
console.log(numbers);

const fruits=['apples','oranges','pears']
console.log(fruits)

// can have multiple datatypes in a single array

// arrays are zero based
console.log(fruits[1])  
// gives oranges

// adding values to array
fruits[3]='grapes'

// at the end
fruits.push('mangoes')
// at the beginning
fruits.unshift('guava')

console.log(fruits.indexOf('oranges'))

// object literals
const person={
    Name:'john' ,
    lastName:'doe',
    age:30,
    hobbies:['music','dance'],
address:{
    street:'patia',
city:'Bhubaneshwar',
state:'Odisha'
}
}

console.log(person);

// to get the specific info
console.log(person.Name,person.hobbies);
console.log(person.hobbies[1]);

person.email='john@gmail.com'

const todos=[
    {
        id:1,
        text:'homework',
        isCompleted:true
    },
    {
        id:2,
        text:'meeting',
        isCompleted:true
    },
    {
        id:3,
        text:'coding',
        isCompleted:true
    }

]

console.log(todos[1].text);


// converting to json
const todoJSON=JSON.stringify(todos);
console.log(todoJSON)

// for loops

for(let i=0; i<10; i++){
    console.log(i);
}
    
// i++ is necessary else the loop will not looping

for(let i=0; i<todos.length;i++){
    console.log(todos[i].text);
}



//for each,map,filter
todos.forEach(function(todo){
    console.log(todo.text)
})


const todoText= todos.map(function(todo){
    return todo.text
})

console.log(todoText);

const todoCompleted= todos.map(function(todo){
    return todo.isCompleted===true;
})
console.log(todoCompleted);


// conditionals

const d=1;

if(d==10){
console.log('d is 10')
}else{
    console.log('d is not 10')
} 

// ternery
const color = d>10? 'red':'blue';
console.log(color);

// functions
function addNums(num1,num2){
   return(num1 + num2)
}

console.log(addNums(1,2));

// arrow function
const addNums1=(num1,num2)=>{
    return(num1 + num2)
 }
 
 console.log(addNums(1,2));

//  oops

// constructor function
function Person (firstName, LastName, dob) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.dob = new Date(dob);
        this.getBirthYear = function(){
            return this.dob.getFullYear()
        }
    }

Person.prototype.getFullName = function(){
    return `${this.firstName}${this.LastName}`;
}


// /class

class Person2{
    constructor(firstName, LastName, dob){
        this.firstName = firstName;
        this.LastName = LastName;
        this.dob = new Date(dob);
    }
    getFullName(){
        return `${this.firstName}${this.LastName}`;
    }
}




// instantiate object
const person1 = new Person('john','Doe','4-3-2005')

console.log(person1.dob);

console.log(person1.getBirthYear());



// DOM
