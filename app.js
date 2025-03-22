const button=document.getElementById("button");
const joke=document.getElementById("jokecontent");
const answer=document.getElementById("joke");

button.onclick=()=>{
    axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then(function(response){
        button.textContent="Next";
        answer.textContent="";
        joke.textContent=response.data.setup;
        setTimeout(function(){
            answer.textContent=response.data.punchline;
        },1000);
    })
    .catch(function(error){
        console.log(error);
    })
};