var settingHolder = [];

function updateColourScheme(){
	if (document.getElementById("colourScheme").value == "Light"){
		localStorage.colourSetting = "Light";
		document.getElementById("stylelink").setAttribute("href", "MainPageCSS2.css");
		location.reload();
	} else {
		localStorage.colourSetting = "Dark";
		document.getElementById("stylelink").setAttribute("href", "MainPageCSS.css");
		location.reload();
	}
}

function colourSchemeChecker(){
	if (localStorage.colourSetting == "Light"){
		document.getElementById("stylelink").setAttribute("href", "MainPageCSS2.css");
	} else {
		document.getElementById("stylelink").setAttribute("href", "MainPageCSS.css");
	}
}

function updateValue(){
	document.getElementById("colourScheme").value = localStorage.colourSetting;
}