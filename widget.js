function WidgetCallBack(JSONobject) 
{    
    var wHelloWorld;
    var wHTML = "";

    var total = 18;
    
    for(i=0;i<total;i++){
        
        wHelloWorld = JSONobject[i];
        wHTML += ('<a href="'+wHelloWorld.link+'">')
        
        wHTML += ('<div angle="0" state="desktopView" style="visibility: visible; left: '+wHelloWorld.left+'; top: ' + wHelloWorld.top + '; width: ' + wWidth + '; height: ' + wHeight + ';margin-right:10px; position: absolute; z-index: auto;background-color:5CCEEE ;">'+'<div>');
        
        wHTML += ('<div style="position: relative;width: 100%;height: 52%;display: inline-block;"><div style="position:relative;width: 50%;margin: 0 0 0 0;display: inline-block;float: left;"><img src="' + wHelloWorld.image_ori +'" style="width:100%;padding:2.5% 0 0 2.5%;"></div><div style="text-align:center;position: relative;display:inline-block;width: 45%;top: 25%;float: left;"><p style="text-align:right;margin: 0 0 0 0;">' + wHelloWorld.name + '</p></div></div>');

        wHTML += ('<div style="position: inherit;width: 100%;height: 30%;display: inline-block;"><div style="position:relative;width: 66%;margin: 0 0 0 0;float: left;"><img src="images/'+wHelloWorld.dif+'-5v2.png" style="width:142%;padding:2.5% 0 0 2.5%;"></div><div style="text-align:right;position: relative;display:inline-block;width: 45%;top: 10%;float: right;"><button id="elbo" type="button" class="btn btn-default btn-lg" style="background-color: rgba(0,0,0,0);border-color: rgba(0,0,0,0);width:18px;height:18px;padding: 0 0 0 0;"><span id="logo" class="');
        if(wHelloWorld.fav)
            wHTML += ('glyphicon glyphicon-star');
        else
            wHTML += ('glyphicon glyphicon-star-empty');
        wHTML += ('" style="width: auto;height: auto;"></span></button></div></div>');

        wHTML += ('</div></div>');
        wHTML += ('</a>')
        document.getElementById('myFirstWidget').innerHTML += wHTML;
       wHTML = "";
    }

    for(i=0;i<total;i++){
        var pos = JSONobject[i].prev;
        for(j=0;j<pos.length;j++){
            var lastLeft = parseInt(JSONobject[i].left,10);
            var lastTop = parseInt(JSONobject[i].top,10);
            var c=document.getElementById("myCanvas");
            var ctx=c.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(lastLeft,lastTop+25);
            var lastLeft = parseInt(JSONobject[pos[j]].left,10);
            var lastTop = parseInt(JSONobject[pos[j]].top,10);
            ctx.lineTo(lastLeft+65,lastTop+25);
            ctx.stroke();
        }
    }
}
