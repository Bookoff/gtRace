function go(){
	function Driver(name, speed, ability, reliability) {
		this.name = name;
		this.speed = speed;
		this.ability = ability;
		this.reliability = reliability;
		this.position = 0;
	
	function Track(weather) {
		this.weather = weather;
	}
		var wet = new Track(-4);

    this.isReliability = function(){
			return Math.floor(Math.random() * 10) + 1 < this.reliability;
		};
		this.isAbility = function(){
			return Math.floor(Math.random() * 100) +1 < this.ability;
		};
		
		this.progress = function() {
			return this.name + " is at: " + this.position;
		};
		
		this.advance = function() {
			if(this.isAbility()) {
				this.position += this.speed;
			}
		}; 
	}

	var Hamilton = new Driver("Hamilton", 9, 98, 6);
	var Rosberg = new Driver("Rosberg", 9, 97, 6);
	var Grosjean = new Driver("Grosjean", 7, 85, 4);
	var Bottas = new Driver("Bottas", 9, 90, 8);
	var meters = 3050;

	while (Hamilton.position < meters && Rosberg.position < meters && Grosjean.position < meters && Bottas.position < meters) {
		Hamilton.advance();
		Rosberg.advance();
		Grosjean.advance();
		Bottas.advance();
		console.log(Hamilton.progress() + " -- " + Rosberg.progress() + " -- " + Grosjean.progress() + "--" + Bottas.progress());
	}

	if (Hamilton.position >= meters){
		return "Hamliton Wins! YAY!!!!!";
	}else if (Rosberg.position >= meters){
		return "Rosberg wins! Suck it Rosberg!!!";
	}else if (Grosjean.position >= meters){
		return "Are you kidding me?!!??!?!";
	}else if (Bottas.position >= meters) {
		return "Sweet Victory for the Finn!";
	}else {
		return "The Race continues...";
	} 
};	