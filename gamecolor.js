var no=6;
var colors=generaterandomcolor(no);

var squares=document.querySelectorAll("#square");
var color=document.querySelector(".colordisplay");
var mess=document.querySelector(".messagedisplay");
var resetbutton=document.querySelector("#reset")
var pickedcolor=pickcolorr();
var h1=document.querySelector("h1");
var easy=document.querySelector("#easybtn");
var hard=document.querySelector("#hardbtn");
color.textContent=pickedcolor;

easy.addEventListener("click", 	function(){
no=3;
easy.classList.add("selected");
hard.classList.remove("selected");
colors=generaterandomcolor(no);
 pickedcolor=pickcolorr();
color.textContent=pickedcolor;
	
	for(var i=0;i<squares.length;i++)
{
	if(colors[i])
	{
	squares[i].style.background=colors[i];
}
else
{
		squares[i].style.background="none";

}
}
})

hard.addEventListener("click",function(){
no=6;
easy.classList.remove("selected");
hard.classList.add("selected");
colors=generaterandomcolor(no);
 pickedcolor=pickcolorr();
color.textContent=pickedcolor;
	
	for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
}
})


resetbutton.addEventListener("click",function(){
	colors=generaterandomcolor(no);
 pickedcolor=pickcolorr();
color.textContent=pickedcolor;
	
	for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
}
h1.style.background="#232323";
})
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.background;
		console.log(clickedcolor,pickedcolor);
		if(clickedcolor===pickedcolor)
		{
			mess.textContent="Correct!";
			changecolor(clickedcolor);
			h1.style.background=clickedcolor;
		}
		else
		{
			this.style.background="#232323";
			mess.textContent="Try Again!";
		}

})
}

function changecolor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}

}

function pickcolorr()
{
	var x=colors.length;
	var randomno=Math.floor(Math.random()*x);
	return colors[randomno];
}

function generaterandomcolor(no)
{
	var arr=[];
	for(var x=0;x<no;x++)
	{
		arr.push(randomcolors());
	}
	return arr;

}
function randomcolors()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb("+ r +", " + g + ", " + b + ")";
}
