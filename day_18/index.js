let person = {};

person.name = prompt("Enter your name:");
person.age = parseInt(prompt("Enter your age:"), 10);
person.city = prompt("Enter your city:");

document.getElementById("example").innerHTML = "Hi , My name is "+person.name+". I'm " + person.age + " . I'm from"+person.city