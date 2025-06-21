var s=document.querySelector(".side-navbar")

function shnavbar()
{
    s.style.left="0"
}
function clnavbar(){
    s.style.left="-70%"
}

var pc = document.getElementById("product")
var se = document.getElementById("search")
var pl = pc.querySelectorAll("div")

se.addEventListener("keyup",function(){
    var en=event.target.value.toUpperCase()
    for(i=0;i<pl.length;i++)
    {
        var proname = pl[i].querySelector("p").textContent

        if(proname.toUpperCase().indexOf(en) < 0)
        {
            pl[i].style.display="none"
        }
        else{
            pl[i].style.display="block"
        }
    }
})