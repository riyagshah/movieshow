// Store the wallet amount to your local storage with key "amount"
var insidetotal=JSON.parse(localStorage.getItem("amount"))||[];
if(insidetotal==0)
{
    document.getElementById("wallet").innerText=0;
}
else
{ 
    document.getElementById("wallet").innerText=insidetotal
}


function add()
{    
     var amount=document.getElementById("amount").value;
   

    var total=Number(amount)+Number(insidetotal)
   
    localStorage.setItem("amount",JSON.stringify(Number(total)))
    window.location.reload();
}