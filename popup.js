document.addEventListener("DOMContentLoaded", function(){

	if(typeof localStorage["inputText"] !== "undefined")
        document.getElementById("textdata").innerHTML = localStorage["inputText"];

    document.getElementById("textdata").addEventListener("mouseout", function(){
        localStorage["inputText"] = document.getElementById("textdata").value;
    });
	
	//Javascript to Clear current text in the text area for users to type new notes
	document.getElementById("clear").addEventListener("click", function eraseText() {
		document.getElementById("textdata").value = "";
	});
	
	//Javascript to Copy All Text in the Text Area
	document.getElementById("copy").addEventListener("click", function copyText() {
	  var copyText = document.getElementById("textdata");
	  copyText.select();
	  document.execCommand("copy");
	  //Show message to user about the all text copied
	  alert("Copied the text: " + copyText.value);
	});

	
});

	
	
	

