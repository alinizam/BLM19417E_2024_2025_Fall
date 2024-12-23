function Person(name, job, yearOfBirth){   
    this.name= name; 
    this.job= job; 
    this.yearOfBirth= yearOfBirth; 
} 
// adding calculateAge() method to the Prototype property 
Person.prototype.calculateAge= function(){  
    console.log('The current age is: '+(2019- this.yearOfBirth)); 
} 
console.log(Person.prototype); 
  
// creating Object Person1 
let Person1= new Person('Jenni', 'clerk', 1986);  
console.log(Person1) 
let Person2= new Person('Madhu', 'Developer', 1997); 
console.log(Person2) 
  
Person1.calculateAge(); 
Person2.calculateAge(); 
