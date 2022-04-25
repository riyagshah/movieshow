// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
var amount=JSON.parse(localStorage.getItem("amount"))
var h1=document.getElementById("wallet").innerText=amount
let id;
async function main()
{
    let name=document.getElementById("search").value
let res=await fetch(`https://www.omdbapi.com/?apikey=d806bd70&s=${name}&`);
let data=await res.json();
// console.log(data.Search)
searchmovies(data.Search)
}

function searchmovies(data)
{ console.log(data)
    document.getElementById("movies").innerHTML=null;
    data.map(function(el){
      
        var div1=document.createElement("div")
        var img=document.createElement("img")
        var title=document.createElement("p")
        var button1=document.createElement("button");
        button1.setAttribute("class","book_now")
        button1.innerText="book now"
        button1.addEventListener("click",function(){
            bookit(el)
        })
        img.src=el.Poster;
        title.innerText=el.Title;
        div1.append(img,title,button1)
      
        document.getElementById("movies").append(div1)
  
    })
}
function debounce(func,delay)
{
    if(id)
    {
        clearTimeout(id);
    }
    id=setTimeout(function(){
        func()
    },delay);
}

function bookit(el)
{ console.log(el)

    localStorage.setItem("movie",JSON.stringify(el))
    window.location.href="checkout.html"
}