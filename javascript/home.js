var x=0;
var y=12;

function newpost()
{
	x=0;
	for(var i=0;i<10;i++)
	{
		/*====Parent DIV (mainpost)========*/
		var div=document.createElement("DIV");
		div.className="mainpost";
		var text=document.createTextNode(x);
		// div.appendChild(text);
		x++;

		/* -------- adding div at the bottom ---------*/
		var parent=document.getElementsByClassName("allpost");
		parent[0].appendChild(div);
		// var hr=document.createElement("hr");
		// parent[0].appendChild(hr);

		/*============ DIV userimg ===============*/
		var div1=document.createElement("DIV");
		div1.className="userimg";
		var img=document.createElement("img");
		img.src="../images/profile/other_profile.png";
		div1.appendChild(img);
		div.appendChild(div1);

		/*============ DIV username ===============*/
		var div2=document.createElement("DIV");
		div2.className="username";
		var para=document.createElement("p");
		para.className="name";
		var text1=document.createTextNode("User Name");
		para.appendChild(text1);
		div2.appendChild(para);
		div.appendChild(div2);

		/*---------- paragraph time ---------------*/
		var para1=document.createElement("p");
		para1.className="time";
		var text2=document.createTextNode("2hr ago");
		para1.appendChild(text2);
		div.appendChild(para1);

		/*---------- paragraph quotes ---------------*/
		var para2=document.createElement("p");
		para2.className="quotes";
		var text3=document.createTextNode("I want a world where everything is welcome, everything is valid, everything is acknowledged, embraced, and accepted. To me, that's a perfect world.");
		para2.appendChild(text3);
		div.appendChild(para2);

		/*============ DIV post ===============*/
		var div3=document.createElement("DIV");
		div3.className="post";
		var img1=document.createElement("img");
		img1.className="postimg";
		// img1.src="../images/login/society.jpg";
		div3.appendChild(img1);
		div.appendChild(div3);

		/*============ DIV likedislike ===============*/
		var div4=document.createElement("DIV");
		div4.className="likedislike";
		/*$$$$$$$$$$ paragraph like $$$$$$$$$$$$$$$$*/
		var para3=document.createElement("p");
		para3.className="like";
		/*........... Span nooflike ............*/
		var span1=document.createElement("span");
		span1.className="nooflike";
		span1.id="1like";
		var spantext=document.createTextNode("0 ");
		span1.appendChild(spantext);
		var text4=document.createTextNode(" likes \u00a0 ");
		para3.appendChild(span1);
		para3.appendChild(text4);
		div4.appendChild(para3);
	    /*........... Span noofdislike ............*/
		var span2=document.createElement("span");
		span2.className="noofdislike";
		span2.id="1dislike";
		var spantext1=document.createTextNode("0 ");
		span2.appendChild(spantext1);
		var text5=document.createTextNode(" dislikes");
		para3.appendChild(span2);
		para3.appendChild(text5);
		div4.appendChild(para3);
		/*$$$$$$$$$$$ paragraph likedisbttn $$$$$$$$$$$$$$$*/
		var para4=document.createElement("p");
		para4.className="likedisbttn";
		/*........... Span fa fa-thumbs-up ............*/
		var span3=document.createElement("span");
		span3.className="fa fa-thumbs-up";
		span3.setAttribute("onclick","increase();");
		para4.appendChild(span3);
		div4.appendChild(para4);
	    /*........... Span noofdislike ............*/
		var span4=document.createElement("span");
		span4.className="fa fa-thumbs-down";
		span4.setAttribute("onclick","decrease();");
		para4.appendChild(span4);
		div4.appendChild(para4);
		div.appendChild(div4);


	}
		
}

function mypost()
{
	var div=document.createElement("DIV");
	div.className="mainpost";
	var text=document.createTextNode(y);
	div.appendChild(text);
	y++;
	var parent=document.getElementsByClassName("allpost");
	parent[0].insertBefore(div, parent[0].childNodes[0]);
	// var hr=document.createElement("hr");
	// parent[0].insertBefore(hr, parent[0].childNodes[1]);
}

/*======== Like increase =========*/

function increase()
{
	var like=document.getElementById("1like");
	like.innerHTML=parseInt(like.innerHTML)+1;
	var up=document.getElementsByClassName("fa-thumbs-up");
	up[0].style.color= "#009688";
	up[0].style.pointerEvents="none";
	var down=document.getElementsByClassName("fa-thumbs-down")
	if(down[0].style.color=="rgb(0, 150, 136)")
	{
		var dislike=document.getElementById("1dislike");
		dislike.innerHTML=parseInt(dislike.innerHTML)-1;
	}
	down[0].style.color="black";
	down[0].style.pointerEvents="all";
}

function decrease()
{
	var dislike=document.getElementById("1dislike");
	dislike.innerHTML=parseInt(dislike.innerHTML)+1;
	var down=document.getElementsByClassName("fa-thumbs-down");
	down[0].style.color= "#009688";
	down[0].style.pointerEvents="none";
	var up=document.getElementsByClassName("fa-thumbs-up");
	if(up[0].style.color=="rgb(0, 150, 136)")
	{
		var like=document.getElementById("1like");
		like.innerHTML=parseInt(like.innerHTML)-1;
	}
	up[0].style.color="black";
	up[0].style.pointerEvents="all";
}