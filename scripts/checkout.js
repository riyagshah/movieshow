// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

var amount=JSON.parse(localStorage.getItem("amount"))
var h1=document.getElementById("wallet").innerText=amount

var movie=JSON.parse(localStorage.getItem("movie"));
var div3=document.getElementById("movie");

var img=document.createElement("img");
img.src=movie.Poster
var title=document.createElement("h2")
title.innerText=movie.Title
div3.append(title,img)
movie.append(div3)
function confirm()
{
    var numberseat=document.getElementById("number_of_seats").value;
var find=Number(numberseat)*100;
// console.log(amount-find)
    if(find>amount)
    {
        alert("Insufficient Balance !")
     
    }
    else
    {
        alert("Booking Successful!")
        var d=amount-find;
        localStorage.setItem("amount",JSON.stringify(Number(d)))
        window.location.reload();
    }
    
}