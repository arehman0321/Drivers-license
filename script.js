var age,
    fName,
    lName,
    dob,
    color;
    

var val = {
    firstName: '',
    lastName: '',
    age: 0,
    dob: '00/00/0000',
    eyeColor: '',
    calcAge: function (){
        if (age <= 0){
            alert('This is not a valid age');
        }else if (age < 16){
            alert('You are too young to drive.');
        }else if (age === '16'){
            alert("You are old enough to get a learner's permit!!!");
        }else if (age > 16){
            alert('You are old enough to drive!!!');
        }
    },
    printInfo: function (){
        document.querySelector('#message').innerHTML = "<p>Last Name: " + val.lastName + "</p>" + "<p>First Name: " + val.firstName + "</p>" + "<p>Age: " + val.age + "</p>" + "<p>Date of birth: " + val.dob + "</p>" + "<p>Eye Color: " + val.eyeColor + "</p>";
        
        if ((val.age === '')){
            alert('please enter an age');
            document.querySelector('#message').innerHTML = '';
        }else if (val.firstName === ''){
            alert('please enter your first name');
            document.querySelector('#message').innerHTML = '';
        }else if (val.lastName === ''){
            alert('please enter your last name');
            document.querySelector('#message').innerHTML = '';
        }else if (val.eyeColor === ''){
            alert('please pick your eye color');
            document.querySelector('#message').innerHTML = '';
        }else if (val.dob === ''){
            alert('please enter your date of birth');
            document.querySelector('#message').innerHTML = '';
        }
    }
};

function hello (){
    age = document.querySelector('.age').value;
    console.log(age);
    
    fName = document.querySelector('.firstName').value;
    console.log(fName);
    
    lName = document.querySelector('.lastName').value;
    console.log(lName);
    
    dob = document.querySelector('#date').value;
    console.log(dob);

    var input = document.querySelector('.color');
    color = input.eyes.value;
    console.log(color);
    
    
    val.age = age;
    val.firstName = fName;
    val.lastName = lName;
    val.eyeColor = color;
    val.dob = dob;
    
    val.calcAge();
    val.printInfo();
}