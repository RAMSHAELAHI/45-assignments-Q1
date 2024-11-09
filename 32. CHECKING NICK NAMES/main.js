"use strict";
let current_users = ['sana', 'babar', 'saba', 'taha', 'admin'];
let new_users = ['fawad', 'admin', 'user7', 'raza', 'user9'];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
