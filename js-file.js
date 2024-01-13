
let counter1 = 1;
let counter2 = 1;
const player = document.querySelector(".player");
const computer = document.querySelector('.computer');
const button= document.querySelectorAll('.game ul button');
const emoji = {Rock:"✊",Paper: "✋", Scissors: "✌️"}
const getComputerChoice = () => {
	let list = ['Rock', 'Paper', 'Scissors']
	return list[Math.floor(Math.random() * 3)]
}

const playRound = (playerSelection, computerSelection) => {
	player.querySelector(".emoji").innerHTML = emoji[playerSelection]
	computer.querySelector(".emoji").innerHTML = emoji[computerSelection];
	if (playerSelection === 'Rock' && computerSelection === 'Paper')
		return -1
	if (playerSelection === 'Rock' && computerSelection === 'Scissors')
		return 1
	if (playerSelection === 'Paper' && computerSelection === 'Rock')
		return 1
	if (playerSelection === 'Paper' && computerSelection === 'Scissors')
		return -1
	if (playerSelection === 'Scissors' && computerSelection === 'Rock')
		return -1
	if (playerSelection === 'Scissors' && computerSelection === 'Paper')
		return 1
}


button.forEach(element => {
	element.addEventListener("click",() =>{
		if (playRound(element.id, getComputerChoice()) == 1 )
		{
			counter1++;
			player.querySelector("p span").innerHTML = counter1 ;
		}
		else if (playRound(element.id, getComputerChoice()) == -1 )
		{
			counter2++;
			computer.querySelector("p span").innerHTML = counter2;
		}
	} )
});


document.querySelector('#rest').addEventListener("click",() =>{
		counter1 = 0;
		counter2 = 0;
		player.querySelector("p span").innerHTML = 0;
		computer.querySelector("p span").innerHTML = 0;
})