function action(){
    if(document.getElementById("logo").getAttribute("class")=="glyphicon glyphicon-remove")
        document.getElementById("logo").setAttribute("class","glyphicon glyphicon-remove red")
    else
        document.getElementById("logo").setAttribute("class","glyphicon glyphicon-ok green")
}
