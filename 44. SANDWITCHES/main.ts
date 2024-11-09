function make_sandwitch(...items : string[]) {
 console.log(`Making a Sandwith with : ${items.join( "bun "  )}.`);
}

make_sandwitch(" mayo " , "cheese");
make_sandwitch(" tomato " , "cabbage" , "onion");
make_sandwitch(" chicken" , "sauces " , "spices");