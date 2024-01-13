
let counter = 0;
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
	if (playerSelection === computerSelection)
		return 0
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
	return 9;
}


button.forEach(element => {
	element.addEventListener("click",() =>{
		if (playRound(element.id, getComputerChoice()) === 1 )
		{
			player.querySelector("p span").innerHTML = ++counter;

		}
		else if (playRound(element.id, getComputerChoice()) === -1 )
		{
			computer.querySelector("p span").innerHTML = ++counter;
		}
	} )
});


document.querySelector('#rest').addEventListener("click",() =>{
		player.querySelector("p span").innerHTML = 0;
		computer.querySelector("p span").innerHTML = 0;
})