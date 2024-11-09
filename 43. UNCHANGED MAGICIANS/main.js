"use strict";
let magicians = ["jinny", "nevil", "cedric"];
function make_great(magicians) {
    let greateMagicians = [];
    magicians.forEach(magician => {
        greateMagicians.push(`${magicians} the Great`);
    });
    return greateMagicians;
}
;
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
let greateMagicians = make_great(magicians.slice());
console.log("Original magicians:");
show_magicians(magicians);
console.log("Great magicians");
show_magicians(greateMagicians);
