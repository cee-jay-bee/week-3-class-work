//create the array
let group = [];

function getPerson(){
    //get first and last name input
    let fName = prompt('First Name');
    let lName = prompt('Last Name');
    let chort = prompt('Which cohort is this person in?');
    //create object for each person
    let person = {
        firstName: fName,
        lastName: lName,
        cohort: chort
    }
    //puts person into group array
    group.push(person);
}
//create a loop to ask 
while(confirm('Do you want to add a person to your group?')){
    getPerson();
}

console.log(group);