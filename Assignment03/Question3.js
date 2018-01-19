
'use strict'


const EventEmitter = require('events');


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


var ticker = new Clock();
ticker.on("tick",function(){
    console.log("woohoo");
});