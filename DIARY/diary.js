// select popup-btn,back,popup
var container1=document.querySelector(".container1")
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var popupbtn=document.getElementById("popup-btn")

// function hhh()
// {
//     back.style.display='block'
//     popup.style.display='block'
// }
 popupbtn.addEventListener("click",function(event)
     {  
        container1.style.display='block'
        popupbox.style.display='block'
    }
 )

// select addbtn,cancelbtn
var addmsg=document.getElementById("addmsg")
 addmsg.addEventListener("click",function(event)
 {
    event.preventDefault()
 }
 )
 var cancel=document.getElementById("cancel")
 cancel.addEventListener("click",function(event)
 {
    event.preventDefault()
    container1.style.display='none'
    popupbox.style.display='none'
 }
 )

//select msg container,bookname,authername,description,addmsg

var msg=document.querySelector(".msg")
var box=document.querySelector(".box")
var date=document.getElementById("date")
var title=document.getElementById("title")
var description=document.getElementById("description")
var addmsg=document.getElementById("addmsg")

addmsg.addEventListener("click",function(event)
{
    event.preventDefault()
    var box1=document.createElement("div")
    box1.setAttribute("class","box")
    box1.innerHTML=`<h2>${date.value}</h2>
    <h1>${title.value}</h1>
    <p>${description.value}</p>
    <button onclick="bookdelete(event)">Delete</button>
    <p>--------------------------------------------------------------------------------------------</p>`
    msg.append(box1)
    container1.style.display='none'
    popupbox.style.display='none'
}
)

function msgdelete(event)
{
    event.target.parentElement.remove()
}