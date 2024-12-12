function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = function(){
        return age;
    };
}

p1 = new Person("Ahmet", "Ak", 39);
Person.prototype.age = ()=>{
        return 30;
};

console.log(p1.age());  
