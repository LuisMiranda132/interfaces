function WidgetCallBack(JSONobject) 
{    
    var wHelloWorld;
    var wHTML = "";
    
    for(i=0;i<3;i++){
        wHelloWorld = JSONobject[i];
        wHTML += ('<div angle="0" state="desktopView" style="visibility: visible; left: '+wHelloWorld.left+'; top: ' + wHelloWorld.top + '; width: ' + wWidth + '; height: ' + wHeight + '; position: absolute; z-index: auto;background: aquamarine;">'+'<div>');
        
        wHTML += ('<div style="position: relative;width: 100%;height: 70%;display: inline-block;"><div style="position:relative;width: 50%;margin: 0 0 0 0;display: inline-block;float: left;"><img src="' + wHelloWorld.image_ori +'" style="width:100%;padding:2.5% 0 0 2.5%;"></div><div style="text-align:center;position: relative;display:inline-block;width: 45%;top: 25%;float: left;"><p style="text-align:right;margin: 0 0 0 0;">' + wHelloWorld.name + '</p></div></div>');

        wHTML += ('<div style="position: inherit;width: 100%;height: 30%;display: inline-block;"><div style="position:relative;width: 50%;margin: 0 0 0 0;display: inline-block;float: left;"><p style="text-align:left;margin: 0 0 0 0;">Dificultad</p></div><div style="text-align:right;position: relative;display:inline-block;width: 45%;top: 10%;float: right;"><img src="images/favoriteStar.png" style="width:50%;padding:2.5% 0 0 2.5%;"></div></div>');

        wHTML += ('</div></div>');
    }
    document.getElementById('myFirstWidget').innerHTML = wHTML;

}
