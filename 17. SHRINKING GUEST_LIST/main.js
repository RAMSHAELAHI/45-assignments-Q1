"use strict";
let guest_list = ['ramsha', 'minhal', 'maira', 'soofia',];
let not_present = `minhal`;
let new_guest = "Babar Azam";
guest_list[1] = new_guest;
console.log(`Miss. ${not_present} will not coming tomorrow at dinner.`);
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
console.log("\n Unfortunately! We can not arrange big table , only 2 people allowed");
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Madam /Sir ${remove_guest}  \n you are not invited for dinner`);
}
;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Respected Miss/Sir ` + guest_list[i] +
        `,\n\n Yes you are still invited you on a dinner tomorrow.\nTHANK YOU!!!\n\n`);
}
guest_list.splice(0, 2);
console.log(guest_list);
