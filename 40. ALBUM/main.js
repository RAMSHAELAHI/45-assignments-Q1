"use strict";
function myAlbum(artistName, albumTitile) {
    return { artistName, albumTitile };
}
let album1 = myAlbum("Ali ", "Rang-e-muhabbat");
let album2 = myAlbum("Raza", "Roshan andher");
let album3 = myAlbum("Ayaz", "Mausam-e-dil");
console.log(album1);
console.log(album2);
console.log(album3);
function myAlbum2(artistName, albumTitile, numberOfTracks) {
    return { artistName, albumTitile };
}
let album4 = myAlbum2("Ali ", "dil hai", 30);
let album5 = myAlbum2("asad", "ajeeb kahani", 55);
let album6 = myAlbum2("babar", "ishq  murshad", 78);
console.log(album4);
console.log(album5);
console.log(album6);
