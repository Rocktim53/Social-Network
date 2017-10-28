var slideIndex=1;
var click=0;
var time1;

function plusSlides(n)
{
	click=1;
	showSlides(slideIndex+=n);
}

function currentslide(n)
{
	click=1;
	showSlides(slideIndex=n);
}

function showSlides(n)
{
	var slide=document.getElementsByClassName("singleslide");
	var bubble=document.getElementsByClassName("dot");

	if(n>slide.length)
	{
		slideIndex=1;
	}
	if(n<1)
	{
		slideIndex=slide.length;
	}

	for(var i=0;i<slide.length;i++)
	{
		slide[i].style.display="none";
		bubble[i].className=bubble[i].className.replace(" active","");
	}

	slide[slideIndex-1].style.display="block";
	bubble[slideIndex-1].className+=" active";
	if(click==0)
  		time1=setTimeout(function(){showSlides(slideIndex+=1);},4000);
  	else if(click==1)
    	 click=0;
} 



// load view image to slideshow
 var loadFile = function(event) {
	    var output = document.getElementsByClassName("slidimg");
	    output[slideIndex-1].src = URL.createObjectURL(event.target.files[0]);
		click=1;	  
	    showSlides(slideIndex);
	};


function stoptime()
{
	clearTimeout(time1);
	
}

function starttime()
{
	if(click==0)
	showSlides(slideIndex);
}

// load view image to profile pic
 var loadFile1 = function(event) {
	    var output = document.getElementsByClassName("profilepic");
	    output[0].src = URL.createObjectURL(event.target.files[0]);
	};


function disablemodal(n)
{
	var modal=document.getElementsByClassName('modal');
	modal[n].className=modal[n].className.replace(" animate"," deanimate");
	setTimeout(function(){document.getElementsByClassName('modal')[n].style.display='none';},500);
}

function enablemodal()
{
	var modal=document.getElementsByClassName('modal');
	modal[0].className=modal[0].className.replace(" deanimate"," animate");
	
	// replacing content
	var form=document.getElementsByTagName('form');
	form[1].children[3].value=document.getElementsByClassName('tcontent')[0].children[2].innerHTML;
	form[1].children[7].value=document.getElementsByClassName('tcontent')[0].children[4].innerHTML;
	form[1].children[11].value=document.getElementsByClassName('tcontent')[0].children[6].innerHTML;
	var dob=document.getElementsByClassName('tcontent')[0].children[8];
	res=dob.innerHTML.split(" ");
	form[1].children[15].value=res[0];
	form[1].children[16].value=res[1];
	form[1].children[17].value=res[2];
	if(document.getElementsByClassName('tcontent')[0].children[10].innerHTML=="Male")
	{
	 form[1].children[19].checked=true;
	}
	else
	{
		form[1].children[21].checked=true;
	}
	form[1].children[26].value=document.getElementsByClassName('tcontent')[0].children[12].innerHTML;
	form[1].children[30].value=document.getElementsByClassName('tcontent')[0].children[14].innerHTML;

	// displaying edit menu
	document.getElementsByClassName('modal')[0].style.display='block';
}

function enablemodal1(n)
{
	var modal=document.getElementsByClassName('modal');
	modal[n].className=modal[n].className.replace(" deanimate"," animate");
	
	// replacing content
	var form=document.getElementsByTagName('form');
	form[n+1].children[3].value=document.getElementsByClassName('tcontent')[n].children[2].innerHTML;
	form[n+1].children[7].value=document.getElementsByClassName('tcontent')[n].children[4].innerHTML;
	form[n+1].children[11].value=document.getElementsByClassName('tcontent')[n].children[6].innerHTML;
	var dob=document.getElementsByClassName('tcontent')[n].children[8];
	res=dob.innerHTML.split("-");
	form[n+1].children[16].value=res[0];
	form[n+1].children[17].value=res[1];

	// displaying edit menu
	document.getElementsByClassName('modal')[n].style.display='block';
}

function enablemodal2()
{
	var modal=document.getElementsByClassName('modal');
	modal[3].className=modal[3].className.replace(" deanimate"," animate");
	
	// replacing content
	var form=document.getElementsByTagName('form');
	form[4].children[3].value=document.getElementsByClassName('tcontent')[3].children[2].innerHTML;
	form[4].children[7].value=document.getElementsByClassName('tcontent')[3].children[4].innerHTML;
	form[4].children[11].value=document.getElementsByClassName('tcontent')[3].children[6].innerHTML;
	form[4].children[15].value=document.getElementsByClassName('tcontent')[3].children[8].innerHTML;

	// displaying edit menu
	document.getElementsByClassName('modal')[3].style.display='block';
}

function enablemodal3()
{
	var modal=document.getElementsByClassName('modal');
	modal[4].className=modal[4].className.replace(" deanimate"," animate");
	
	// replacing content
	var form=document.getElementsByTagName('form');
	form[5].children[3].value=document.getElementsByClassName('tcontent')[4].children[2].innerHTML;
	form[5].children[7].value=document.getElementsByClassName('tcontent')[4].children[4].innerHTML;
	form[5].children[11].value=document.getElementsByClassName('tcontent')[4].children[6].innerHTML;

	// displaying edit menu
	document.getElementsByClassName('modal')[4].style.display='block';
}