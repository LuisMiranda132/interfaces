function WidgetCallBack(JSONobject) 
{    
    var wHelloWorld;
    var wHTML = "";
    var top = 20;
    for(i=0;i<26;i++){
        
        wHelloWorld = JSONobject[i];
        wHTML += ('<a href="notyet.html">')

        
        var left = 5+((i%5)*110)
        console.log(i + "=" + i%5 + "-" + left)
        var sleft = left.toString()
        if(i%5==0 && i!=0){
            var top = top + 90;
            var stop = top.toString()
        }
        wHTML += ('<a href="'+wHelloWorld.link+'">')
        
        wHTML += ('<div angle="0" state="desktopView" style="visibility: visible; left: '+sleft+'; top: ' + stop + '; width: ' + wWidth + '; height: ' + wHeight + ';margin-right:10px; position: absolute; z-index: auto;background-color:5CCEEE ;">'+'<div>');
        
        wHTML += ('<div style="position: relative;width: 100%;height: 52%;display: inline-block;font-size: 12px;"><div style="position:relative;width: 50%;margin: 0 0 0 0;display: inline-block;float: left;"><img src="' + wHelloWorld.image_ori +'" style="width:100%;padding:2.5% 0 0 2.5%;"></div><div style="text-align:center;position: relative;display:inline-block;width: 45%;top: 25%;float: left;"><p style="text-align:right;margin: 0 0 0 0;">' + wHelloWorld.name + '</p></div></div>');

        wHTML += ('<div style="position: inherit;width: 100%;height: 30%;display: inline-block;"><div style="position:relative;width: 66%;margin: 0 0 0 0;float: left;"><img src="images/'+wHelloWorld.dif+'-5v2.png" style="width:142%;padding:2.5% 0 0 2.5%;"></div><div style="text-align:right;position: relative;display:inline-block;width: 45%;top: 10%;float: right;"><img src="images/favoriteStar.png" style="width:50%;padding:2.5% 0 0 2.5%;"></div></div>');

        wHTML += ('</div></div>');
        wHTML += ('</a>')

        document.getElementById('results').innerHTML += wHTML;
        wHTML = "";
    }

}
