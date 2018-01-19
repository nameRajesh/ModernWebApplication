

'use strict'

//var util = require('util');
//EventEmitter = require('events').EventEmitter;

const EventEmitter = require('events');

/*var Clock = function(){
    var self = this;
    setInterval(function(){
        self.emit('woohoo');
    },1000);
};*/

class Clock extends EventEmitter{
	constructor(){
		super();
		this.tickerFxn();
		
	}
	tickerFxn(){
		var self = this;
		setInterval(function(){
        self.emit('tick');
    	},1000);
	}
}


/*class Clock extends EventEmitter {
    constructor() {
        super();
        this.tickEv();
    }
    tickEv() {
        const scope = this;
        
        setInterval(function() {
            scope.emit('tick');
        }, 1000); // 1 sec interval
    }
}*/


// var util = require('util');
var ticker = new Clock();
ticker.on("tick",function(){
    console.log("woohoo");
});