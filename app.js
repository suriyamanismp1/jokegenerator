const button=document.getElementById("button");
const jokeContent = document.getElementById("jokecontent");
const joke=document.getElementById("joke");

button.onclick=() =>{
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(fucntion =(response)=>{
        button.textContent="Next";
        jokecontent.textContent =  response.data.setup;
        joke.textContent="";
        setTimeout(funciton=()=>{
            joke.textContent=response.data.punchline;
        },3000);
    })
    .catch(fucntion =(error)=> {
        console.log(error);
    })
}