document.write('<script type="text/javascript" src="searching.js"></script>');

var myElement = document.getElementById('results');
var JavaScriptCode = document.createElement("script");
JavaScriptCode.setAttribute('type', 'text/javascript');
JavaScriptCode.setAttribute("src", 'data.js');
document.getElementById('results').appendChild(JavaScriptCode);
