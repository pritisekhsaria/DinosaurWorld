function callSound1()
{
	var audio = document.getElementById("dino1");
	audio.play();
}

function callSound2()
{
	var audio = document.getElementById("dino2");
	audio.play();
}

//Panel. We don't give ../img here as we are changing src in index file, 
//which is in the root folder
function openAcc()
{
	
	var acc = document.getElementById("acc");
	var accBtn = document.getElementById("accBtn");
	if (acc.style.display == "block")
	{
		acc.style.display = "none";
		accBtn.src = "img/facts.jpg";
		accBtn.onmouseout = function() { accBtn.src = "img/facts.jpg" };
		accBtn.onmouseover = function() { accBtn.src = "img/factsOver.jpg" };
	}
	else
	{
		acc.style.display = "block";
		accBtn.src = "img/factsClose.jpg";
		accBtn.onmouseout = function() { accBtn.src = "img/factsClose.jpg" };
		accBtn.onmouseover = function() { accBtn.src = "img/factsClose.jpg" };
	}

}

//Quiz
function score()
{
	var v1, v2, v3, v4, v5, v6, v7;

	//q1
	v1 = document.getElementById("ques1").value;
	if( v1 == 3)
	{
		document.getElementById("q1").style.borderColor = "green";
	}
	else
	{
		document.getElementById("q1").style.borderColor = "red";
		document.getElementById("ans1").style.display = "block";
	}


	//q2
	v1 = document.getElementById("ques2").value;
	v1 = v1.toLowerCase(); //will convert all text to lower case
	if( v1 == "jurassic park")
	{
		document.getElementById("q2").style.borderColor = "green";
	}
	else
	{
		document.getElementById("q2").style.borderColor = "red";
		document.getElementById("ans2").style.display = "block";
	}


	//q3
	v1 = document.getElementById("ques31").checked;
	if(v1 == true)
	{
		document.getElementById("q3").style.borderColor = "green";
	}
	else
	{
		document.getElementById("q3").style.borderColor = "red";
		document.getElementById("ans3").style.display = "block";
	}


	//q4
	v1 = document.getElementById("ques4").value;
	if(v1 == "Triceratops")
	{
		document.getElementById("q4").style.borderColor = "green";
	}
	else
	{
		document.getElementById("q4").style.borderColor = "red";
		document.getElementById("ans4").style.display = "block";
	}


	//q5
	v1 = document.getElementById("ques51").checked;
	v2 = document.getElementById("ques52").checked;
	v3 = document.getElementById("ques53").checked;
	v4 = document.getElementById("ques54").checked;
	v5 = document.getElementById("ques55").checked;
	v6 = document.getElementById("ques56").checked;

	if(v1 == true && v3 == true && v4 == true && v6 == true && v2 == false && v5 == false)
	{
		document.getElementById("q5").style.borderColor = "green";
	}
	else
	{
		document.getElementById("q5").style.borderColor = "red";
		document.getElementById("ans5").style.display = "block";
	}


	//q6
	v1 = document.getElementById("ques61").checked;
	if(v1 == true)
	{
		document.getElementById("q6").style.borderColor = "green";
	}
	else
	{
		document.getElementById("q6").style.borderColor = "red";
		document.getElementById("ans6").style.display = "block";
	}


	//q7
	v1 = document.getElementById("ques7").value;
	v1 = v1.toLowerCase(); //will convert all text to lower case
	if( v1 == "asteroid")
	{
		document.getElementById("q7").style.borderColor = "green";
	}
	else
	{
		document.getElementById("q7").style.borderColor = "red";
		document.getElementById("ans7").style.display = "block";
	}


	//q8
	v1 = document.getElementById("ques8").value;
	if(v1 == "Argentinosaurus")
	{
		document.getElementById("q8").style.borderColor = "green";
	}
	else
	{
		document.getElementById("q8").style.borderColor = "red";
		document.getElementById("ans8").style.display = "block";
	}

	//q9
	v1 = document.getElementById("ques93").checked;
	if(v1 == true)
	{
		document.getElementById("q9").style.borderColor = "green";
	}
	else
	{
		document.getElementById("q9").style.borderColor = "red";
		document.getElementById("ans9").style.display = "block";
	}

	//q10
	v1 = document.getElementById("ques10").value;
	if(v1 == "Paleontologist")
	{
		document.getElementById("q10").style.borderColor = "green";
	}
	else
	{
		document.getElementById("q10").style.borderColor = "red";
		document.getElementById("ans10").style.display = "block";
	}


}
