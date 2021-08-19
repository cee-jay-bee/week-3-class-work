//create the array
let group = [];
let groupNumber = Number(prompt('How many members are in your group?'));

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
//create a loop to ask if someone wants to add a member and call function to add the member
// while(confirm('Do you want to add a person to your group?')){
//     getPerson();
// }

//loop through each person of the group array
// for (let eachMember of group){
//     console.log(eachMember);
// }

//prompt for members information the number of times you have groups
for (let i = 1; i <= groupNumber; i++){
    getPerson();
}
//log out group members
console.log(group);

// for (let eachMember of group){
//     console.log(eachMember.firstName);
// }

// function removedMemberIndex
// //remove member of the group
// function removeMember(){
//     let removedFName = prompt('First Name');
//     let removedLName = prompt('Last Name');

//     for (let eachMember of group){
//         if(eachMember.firstName === removedFName && eachMember.lastName === removedLName){
//             group.splice
//         }
//     }
// }