const alphabet = ['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A'];
var word = prompt("Introduzca una palabra:", '');
var word_array = word.split("");
var total = 0;
word_array.forEach(letter => {
	total = total + (alphabet.indexOf(letter.toUpperCase())+1);
});

if(total!=0){
	alert(word.toUpperCase()+' = '+total);
}

function reload(){
	window.location.reload();
}

