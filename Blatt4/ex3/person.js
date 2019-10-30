let person = {firstname:"Kevin", lastname:"Wiltschnig", uni:"AAU"};

console.log("Dear " + person.firstname + " " + person.lastname + " from " + person.uni
+ ", welcome to the Web Technologies course.")

const UNI = {
    names:["University of Vienna", "Medical University of Graz", "Medical University of Vienna",
        "Medical University of Innsbruck", "University of Klagenfurt"]};

let x = [];
for (let i = 0; i < UNI.names.length; i++) {
    x.push('<li class="Name">'+ UNI.names[i] + '</li><br>')
}

let STUDENTS = {
    firstNames:["Andy"],
    lastNames:["Lb"],
    ages: [32],
    fieldOfStudy: ["Information Technology"]};

console.log(STUDENTS)

STUDENTS.addNew = (array)=> {
    STUDENTS.firstNames.push(array[0]);
    STUDENTS.lastNames.push(array[1]);
    STUDENTS.ages.push(array[2]);
    STUDENTS.fieldOfStudy.push(array[3]);
}

STUDENTS.addNew(["Marco", "Fr", 34, "Electrical Engineering"])
console.log(STUDENTS)