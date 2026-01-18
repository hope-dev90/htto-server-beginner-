

    async function giveMe(){

     const response = await fetch("https://official-joke-api.appspot.com/random_joke");
     const data = await response.json();
      await new Promise ((resolve,reject)=>{
    setTimeout(()=>{
    resolve(data);


    },200);
 });

     document.getElementById("text").textContent = data.setup + " " + data.punchline;


     
     
    }

   
