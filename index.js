const { spy } = require("chai");

function receivesAFunction(callback){
    callback(spy)
}

function returnsANamedFunction(){
    return function nameFunction(){

    }

}

function returnsAnAnonymousFunction(){
    return function (){

    }
}


