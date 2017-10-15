 var loadFile = function(event) {
	    var output = document.getElementById('load1');
	    output.src = URL.createObjectURL(event.target.files[0]);
	  };

 function onbuttoncolor()
 {
 	document.getElementById("browser").style.backgroundColor = "#4F82C3";
 }

 function outbuttoncolor()
 {
 	document.getElementById("browser").style.backgroundColor = "#00AEEF";
 }