let group = [];
let groupNumber = prompt(`How many people are in your group?`);

// get information for each member of the group and push them into array
const getPerson = () => {
    //takes in person's first and last name
    let fName = prompt(`First Name`);
    let lName = prompt(`Last Name`);
    //creates an object with these
    let person = {
        firstName: fName,
        lastName: lName,
        cohort: 'Ionian'
    }
    //puts into an array
    group.push( person );
}

//loop through to add every person to group
for (let i = 1; i <= groupNumber; i++){
    getPerson();
}

//display array
console.log(group);