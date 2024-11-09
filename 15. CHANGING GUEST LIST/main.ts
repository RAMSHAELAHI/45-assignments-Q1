let guest_list : string [] = [ 'ramsha', 'minhal' , 'maira', 'soofia', ];
for(let i = 0; i<guest_list.length; i++ ) {
    console.log(`Respected Miss/Sir ` + guest_list[i] +  `,\n\n We invited you on a dinner tomorrow.\nTHANK YOU!!!\n\n`)
}

let not_present : string = `minhal`; 
let new_guest : string = "Babar Azam"; 
guest_list[1] = new_guest;

for(let i = 0; i<guest_list.length; i++ ) {
    console.log(`Respected Miss/Sir ` + guest_list[i] +  `,\n\n We invited you on a dinner tomorrow.\nTHANK YOU!!!\n\n`)
}

console.log(`Miss. ${not_present } will not coming tomorrow at dinner.`)