

class Musician{
		constructor(name){
      		this.name = name;}
	play(piece){
  		console.log(this.name +' is now palying '+ piece )
		}
}

 
let Violinist = new Musician('Dewan');
Violinist.play('Violin');
let Pianist = new Musician('Rajesh');
Pianist.play('Piano');