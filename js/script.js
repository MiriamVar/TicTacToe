//vytvorenie hraca
if(i%2==0){
	let Player1={
		index: 1;
		src: "img/1.png";
		}
}
else{
	let Player2={
		index: 2;
		src: "img/2.png";
		}
}


//checkovanie hraca
function checkPlayer(event){
	if(index==1){
		event=1;
	}
	else{
		event=2;
	}
}


//hracia funkcia
let click=0;
function play(){
	click++;
	if(click%2==1){
		Player1;
	}
	else{
		Player2;
	}
}


$(document).ready(function(){ 
	//vytvori hracu plochu
	for(let i=0;i<9;i++){
		let policko= document.createElement("DIV");
		policko.setAttribute("class", "poleDiv");
		policko.setAttribute("id", "board"+i);
		document.getElementById('board').appendChild(policko);
/*
		let obr=document.createElement("IMG"); 
		obr.setAttribute("id", "place"+i);
		document.getElementById(String('board'+i)).appendChild(obr);
		obr.event.listener(//ktory hrac  je na rade); */
	}


});

