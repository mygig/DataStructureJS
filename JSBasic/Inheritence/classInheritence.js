// constructor patter or classical pattern.
function Person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}

Person.prototype.getFullName = function() {
    return this.first_name + " " + this.last_name;
};

function Greeting(salutation, first_name, last_name) {
    Person.call(this, first_name, last_name);
    this.salutation = salutation;
}

Greeting.prototype = Object.create(Person.prototype);


Greeting.prototype.hello = function() {
    return this.salutation + " " + this.first_name + " " + this.last_name;
}

var per1 = new Person("pranay", "bhawsar");

console.log(per1.getFullName());

var greet = new Greeting("namaste", "aditi", "gupta");
console.log(greet.hello());
console.log(greet.getFullName());