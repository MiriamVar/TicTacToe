let player=[]
let actualPlayer
let gameOver=0;
$(document).ready(function(){ 
	//vytvorenie hraca
	for(let i=1;i<3;i++){
		player[i-1]={
			index: i,
			src: "img/"+i+".png"
		}
	}
	//urcim prveho hraca
	actualPlayer=player[0];

	//vytvori hracu plochu
	for(let i=0;i<9;i++){

		let policko= document.createElement("DIV");
		policko.setAttribute("class", "poleDiv");
		policko.setAttribute("id", "board"+i);
		document.getElementById('board').appendChild(policko);

		let obr=document.createElement("IMG"); 
		obr.setAttribute("id", "place"+i);
		let obj =document.getElementById(String('board'+i));
		obj.appendChild(obr);
		obj.setAttribute("onclick","play(\""+i+"\")");
	}
});
//checkovanie hraca, vymena 
function checkPlayer(){
	if(actualPlayer.index==2){
		actualPlayer=player[0];
	}
	else{
		actualPlayer=player[1];
	}
}

//zistovanie obrazkov
function checkedCol(){
	for(let j=0;j<3;j++){
		let array=[];
		for (let i = 0; i<9; i+=3) {
			array.push(document.getElementById(String('place'+(j+i))).src);
		}
		compare(array);
	}
}

function checkedRow(){
	for(let j=0;j<9;j+=3){
		let array=[];
		for (let i=0; i<3; i++) {
			array.push(document.getElementById(String('place'+(j+i))).src);
		}
		compare(array);
	}
}

function checkedDiag(){
		let array=[];
		for (let i=0; i<9; i+=4) {
			array.push(document.getElementById(String('place'+i)).src);
		}
		compare(array);
		array=[];
		for(let i=2;i<7;i+=2){
			array.push(document.getElementById(String('place'+i)).src);
		}
		compare(array);
}

function compare(array){
	console.log(array);
	if(array[0]==array[1] && array[1]==array[2] && array[0].length>0){
		alert("Won player with number: "+actualPlayer.index);
		gameOver=1;
	}
}

//hracia funkcia
function play(ind){
	if ((document.getElementById(String('place'+ind)).src != "") || gameOver==1) {
		return;
	}
	let obj= document.getElementById(String('place'+ind));
	obj.src=actualPlayer.src;
	checkedCol();
	checkedRow();
	checkedDiag();
	checkPlayer();
}
