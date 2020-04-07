

const userAction = async () => {
    artist =document.getElementById("artist").value
    seed = document.getElementById("seed").value

    myBody = {"instances": [{"artist":artist, "seed": seed}]}
    const response = await fetch('https://ovc5idyes0.execute-api.us-east-1.amazonaws.com/dev-1/', {
        headers: {
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin': '*' ,
            
        },
      method: 'POST',
      mode:'cors',
      body: JSON.stringify(myBody), // string or object
      
    });
    const myJson = await response.json(); //extract JSON from the http response
    var y = myJson.predictions[0].lyrics;
    var test = y.replace('\\\\n', '\n')
    console.log(test)
    document.getElementById("result").value = test;

    
  }
   

//     // var input, filter, a;
//     // var input = document.getElementById('search');
//     // var filter = input.value.toLowerCase();

   
//     //     newnew = await fetch("/search", {
//     //         method: "POST",
//     //         body: JSON.stringify([filter]),
//     //         headers: {
//     //             'Content-Type': 'application/json'
//     //         },
//     //     })

//     //     local_actor = await newnew.json();

//     //     display();
    


    
