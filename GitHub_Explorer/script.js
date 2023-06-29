var form=document.getElementById("myForm");

form.addEventListener("submit", function(e){
    e.preventDefault();
    var search=document.getElementById("search").value;

   // fetch("https://api.github.com/users/"+search)
    //this fetch will return a promise which we will
    //have to convert into jason
    
    fetch("https://api.github.com/users/"+search).then((result) => result.json()).then((data)=>{

    console.log(data);
    
})
})