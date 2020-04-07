let express = require('express');  
let app = express();  
let bodyParser = require('body-parser');
let path = require('path');
var Request = require("request");


app.use(bodyParser.json())





// Request.post({
//     "headers": { "content-type": "application/json" },
//     "url": "https://ovc5idyes0.execute-api.us-east-1.amazonaws.com/dev-1/",
//     "body": JSON.stringify({"instances": [{"artist":"Migos", "seed": "corn"}]})
// }, (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
//     console.dir(JSON.parse(body));
// });


app.use(express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname,'index.html')));  
app.listen(process.env.PORT || 3000); 