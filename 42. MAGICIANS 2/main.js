"use strict";
let magicians = ["jinny", "nevil", "cedric"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "The Great";
    }
}
;
make_great(magicians);
//answer not printed
