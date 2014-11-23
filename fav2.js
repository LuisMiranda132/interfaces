function action(){
    if(document.getElementById("logo").getAttribute("class")=="glyphicon glyphicon-star")
        document.getElementById("logo").setAttribute("class","glyphicon glyphicon-star-empty")
    else
        document.getElementById("logo").setAttribute("class","glyphicon glyphicon-star")

}
