function headerchange(check)
{
	if(check==1)
	{
		var text=document.getElementById('p1').style.color="white";
		var img=document.getElementById('homaj-home').src="../images/login/home-hover.png";
	}
	else if(check==2)
	{
		var text=document.getElementById('p2').style.color="white";
		var img=document.getElementById('homaj-profile').src="../images/login/profile-hover.png";
	}
	else if(check==3)
	{
		var text=document.getElementById('p3').style.color="white";
		var img=document.getElementById('homaj-society').src="../images/login/society-hover.png";
	}
	else if(check==4)
	{
		var text=document.getElementById('p4').style.color="white";
		var img=document.getElementById('homaj-message').src="../images/login/message-hover.png";
	}
	else if(check==5)
	{
		var text=document.getElementById('p5').style.color="white";
		var img=document.getElementById('homaj-notification').src="../images/login/notification-hover.png";
	}
}

function headerorigin(check)
{
	if(check==1)
	{
		var text=document.getElementById('p1').style.color="black";
		var img=document.getElementById('homaj-home').src="../images/login/home.png";
	}
	else if(check==2)
	{
		var text=document.getElementById('p2').style.color="black";
		var img=document.getElementById('homaj-profile').src="../images/login/profile.png";
	}
	else if(check==3)
	{
		var text=document.getElementById('p3').style.color="black";
		var img=document.getElementById('homaj-society').src="../images/login/society.png";
	}
	else if(check==4)
	{
		var text=document.getElementById('p4').style.color="black";
		var img=document.getElementById('homaj-message').src="../images/login/message.png";
	}
	else if(check==5)
	{
		var text=document.getElementById('p5').style.color="black";
		var img=document.getElementById('homaj-notification').src="../images/login/notification.png";
	}
}