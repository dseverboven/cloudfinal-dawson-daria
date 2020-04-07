



// async function generate() {

//     console.log('hi')
//     var new_actor = await fetch("/new")
    

// }

const userAction = async () => {
    myBody = {"instances": [{"artist":"Migos", "seed": "corn"}]}
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
    console.log(myJson.predictions)
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
    


    
