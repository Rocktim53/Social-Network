increm=3;

function loadcontact()
{
	for(var i=1;i<=29;i++)
	{
		var contacts=document.getElementsByClassName("contacts");
		var contactuser=document.createElement("div");
		contactuser.className="contactuser";
		contacts[0].appendChild(contactuser);
		var onclick="select("+increm+")";
		contactuser.setAttribute("onclick",onclick);
		var userimg=document.createElement("img");
		userimg.src="../images/profile/other_profile.png";
		contactuser.appendChild(userimg);
		var para=document.createElement("p");
		para.className="name";
		var text=document.createTextNode("User Name");
		para.appendChild(text);
		contactuser.appendChild(para);
		increm++;
	}
}