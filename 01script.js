/*  Javascript tutorial sample code...  codecademy
    do while loop example.
    No matter what numeric value we use, the loop runs only once.
    Because we set the variable x =1 in the body of the loop.
*/
var getToDaChoppa = function(x){
  do {
    console.log("Angel is a Javascript master.");
    x = 1;
  } while (x !== 1);
};

getToDaChoppa();
console.log('------------01-------------------------------','');
// ###################################

// Object example.  Objects are collections of information (keys and values) between {}  (A.H. hash, no?)
// This first example even has a function inside the object!
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + ' ...');
};

phonebookEntry.phone();  // Call the function inside phonebookEntry

console.log("phonebookEntry.name : " + phonebookEntry.name) // notation equivalent to:
console.log("phonebookEntry['name'] : " + phonebookEntry['name']) // notation equivalent to above.
console.log('------------02-------------------------------','')


/* Otro ejemplo de Object.  Using the JavaScript reserved word 'Object'
  Using for/in loop as well.
*/

var friends = new Object();

friends.billy = {
  lastName: "Gates",
  firstName: "Bill",
  number: "3057765964",
  address: ['3535 E. Hiawatha Ave. Apt 702']
};
friends.stevie = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "3057525733",
  address: ['3515 E. Fairview St.']
};

var list = function(obj){   // this function prints out the top level keys in the object
  for (var prop in obj){    // which are:  billy and stevie (friends.billy and friends.stevie)
    console.log('prop: ' + prop);
  }
}

list(friends); // this function prints out the top level keys in the object
console.log('------------03-------------------------------','')

var search = function(name){  //Remmember: prop is the top level KEY
  for(var prop in friends){
    if(friends[prop].firstName === name){
      console.log('Next, a console.log of -->>  friends[prop] : ');
      console.log(friends[prop]);
      console.log('Next, a return of -->> friends[prop]');
      return friends[prop];
    }
  }
}

search("Steve");
console.log('------------04-------------------------------','')

var bud = "billy"
console.log("var bud = 'billy'  -- to understand the 2 examples below")
console.log("friends[" +"\'" + bud +"\'" + "] = " + friends['billy'])
console.log("friends[bud] = " + friends[bud])
console.log("friends.bud = " + friends.bud)
console.log('------------05-------------------------------','')


/* Example using 'this' in a function accessible to different objects */

var setAge = function(newAge){
  this.age = newAge;
};

var bob = new Object();
bob.age = 30;
bob.setAge = setAge; // This is where we access 'setAge' from above.

var susan = new Object();
susan.age = 25;
susan.setAge = setAge; // This is where we access 'setAge' from above.

console.log("bob.age = " + bob.age);
bob.setAge(43);
console.log("call bob.setAge(43)  Then", "bob.age = " + bob.age);
console.log('------------06-------------------------------','')


/*#########################################################*/
/* Object constructor.  Not the reserved word Object, but 'new' instead. */
// Notice no 'var' declaration as in the previous example...

function Person(name, age){
// We'll use this Person object constructor below a few times
  this.name = name;
  this.age = age;
}

var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
var george = new Person("George Washington", 43);

console.log("Bob person.name: " + bob.name);
console.log("Susan person['name']: " + susan['name'])
console.log('------------07-------------------------------','')

/*#########################################################*/
// methods with constructors:

function Rectangle(height, width){
  this.height = height;
  this.width = width;
  this.calcArea = function(){
    return this.height * this.width;
  };
  this.calcPerimeter = function(){
    return this.height*2 + this.width*2;
  };
}

var rex = new Rectangle(7,3);
console.log("rex height = " + rex.height);
console.log("rex width = " + rex.width);
console.log("rex area formula= " + rex.calcArea); // no parenthesis after method name.
console.log("rex area = " + rex.calcArea()); // parenthesis after method name.
console.log("rex perimeter formula= " + rex.calcPerimeter);
console.log("rex perimeter = " + rex.calcPerimeter());
console.log('------------08-------------------------------','')


/*#########################################################*/
// Array of objects.  Using 'new Array()'

//use the Person constructor from line 106

var family = new Array(); // I tried using var family = {}  and that didn't work
// the {} only works for 'associative' arrays.  Must have a key, not a position(index)
family[0] = new Person("Alice", 38);
family[1] = new Person("Angel", 42);

for (var i=0; i < family.length; i++){  //notice the ';' separators.  NOT COMMAS
  console.log("family[" + i + "].name= " + family[i].name);
};
console.log('------------09-------------------------------','')

/*#########################################################*/
// Passing Objects ot functions:

// still using Person constructor from line 106
var ageDifference = function( person1, person2){
  return person1.age - person2.age;
};

// create the objects:
var alice = new Person("Alice", 39);
var angel = new Person("Angel", 43);

var diff = ageDifference(alice, angel);
console.log ("ageDifference(alice, angel) = " + diff);
console.log('------------10-------------------------------','')

/*#########################################################*/
// Prototype

function Dog(breed){
  this.breed = breed;
};

var buddy = new Dog("Golden Retriever");

Dog.prototype.bark = function(){
  console.log(this.breed + ": Woof");
};
buddy.bark();

var snoopy = new Dog("Beagle");
snoopy.bark();

console.log('------------11-------------------------------','')
/*#########################################################*/
// Inheritance with prototype

function Animal(name, numlegs){
  this.name = name;
  this.numLegs = numlegs;
  this.isAlive = true;
};

function Penguin(name){
  this.name = name;
  this.numlegs = 2;
};

function Emperor(name){
  this.name = name;
  this.saying = "Waddle waddle";
};

Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log("myEmperor.saying: " + myEmperor.saying);
console.log("myEmperor.numLegs: " + myEmperor.numlegs);
console.log("myEmperor.isAlive: " + myEmperor.isAlive);

console.log('------------12-------------------------------','')
/*#########################################################*/

// Private variables.  Use the word 'var' instead of 'this' inside function

function Person(first, last, age){
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  var bankBalance = 7500;

  this.getBalance = function(){
    return bankBalance;
  };
};

var john = new Person('John', 'Smith', 30);

console.log("john.bankBalance: " + john.bankBalance);
console.log("john.getBalance(): " + john.getBalance());

console.log('------------13-------------------------------','')
/*#########################################################*/

// Private methods.  As before, use 'var' instead of 'this'.  This time
// in the method declaration of getBalance.  when passing methods around don't use ()
// Do use the parenthesis when passing results of methods.

function Customer(first, last, age){
  this.firstname = first;
  this.lastname = last;
  this.age = age;
  var bankBalance = 7500;  // 'var' made this a private variable.

  var returnBalance = function(){  // 'var' made this method private
    return bankBalance;  // bankBalance is a private variable
  };

  this.askTeller = function(){
    return returnBalance();
    // Notice no PARENTHESIS even though returnBalance is a function
  };
};

var jane = new Customer('Jane', 'Smith', 30);
console.log("jane.returnBalance: " + jane.returnBalance);//undefined
console.log("jane.askTeller: " + jane.askTeller);//prints out the actual method!
console.log("jane.askTeller(): " + jane.askTeller())


console.log('------------14-------------------------------','')
/*#########################################################*/

/* passing an argument to the private method and using it to decide what to return */

function atmCustomer(first, last, password){
  this.firstname = first;
  this.lastname = last;
  this.password = password;

  var accountBalance = 78000000;

  this.showBal = function(d){
    if (d == password) return accountBalance;
    else return "Wrong password.";
  };

  this.tryme = accountBalance;
};

var mike = new atmCustomer('Mike', 'York', 5678);
console.log("mike.showBal(5678): " + mike.showBal(5678));
console.log("mike.showBal(112233): " + mike.showBal(112233));
console.log("try to print out accountBalance directly: mike.accountBalance= " + mike.accountBalance);
console.log("try again.  mike.tryme = " + mike.tryme);

console.log('------------15-------------------------------','')
/*#########################################################*/