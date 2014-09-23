$(document).ready(function() {

	function Driver(name, speed, ability, reliability) {
		this.name = name;
		this.speed = speed;
		this.ability = ability;
		this.reliability = reliability;
		this.position = 0;

    this.isReliability = function(){
			return Math.floor(Math.random() * 10) + 1 < this.reliability;
		};
		
		this.isAbility = function(){
			return Math.floor(Math.random() * 100) +1 < this.ability;
		};

		this.advance = function() {
			if(this.isAbility() && this.isReliability()){
				this.position += this.speed;

			$(this.name).css("left", this.position);
			console.log(this.position);	
		} 
	};


	var Hamilton = new Driver("#hamilton", 9, 98, 6);
	var Rosberg = new Driver("#rosberg", 9, 97, 6);
	var Grosjean = new Driver("#grosjean", 7, 85, 4);
	var Bottas = new Driver("#bottas", 9, 90, 8);
	var meters = 305;
	
	$('#raceButton').on('click', function() {
		if (Hamilton.position < meters && Rosberg.position < meters && Grosjean.position < meters && Bottas.position < meters); {
			Hamilton.advance();
			Rosberg.advance();
			Grosjean.advance();
			Bottas.advance();
			console.log();
		}else {
		
		var winner;
	  if (Hamilton.position >= meters){
			winner = "Hamliton Wins! YAY!!!!!";
		}else if (Rosberg.position >= meters){
			winner = "Rosberg wins! Suck it Rosberg!!!";
		}else if (Grosjean.position >= meters){
			winner = "Are you kidding me?!!??!?!";
		}else if (Bottas.position >= meters) {
			winner = "Sweet Victory for the Finn!";
		}else {
			winner = "The Race continues...";
		} 
	
	
	$('#raceButton').html("The winner is:<p>"+ winner + "!!!</p>");
	
			}
		})	
	}
});