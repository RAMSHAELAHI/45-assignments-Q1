"use strict";
function make_sandwitch(...items) {
    console.log(`Making a Sandwith with : ${items.join("bun /n")}.`);
}
make_sandwitch(" mayo ", "cheese");
make_sandwitch(" tomato ", "cabbage", "onion");
make_sandwitch(" chicken", "sauces ", "spices");
