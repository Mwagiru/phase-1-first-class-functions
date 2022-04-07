const { spy } = require("chai");

function receivesAFunction(displayFunction){
    return displayFunction();
}
function returnsANamedFunction(){
    return function callback(){
        console.log("Hello")
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log("Mwagiru here!")
    }
}