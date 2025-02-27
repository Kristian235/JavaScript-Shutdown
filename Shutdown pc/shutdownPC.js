//express server
const express = require("express");

let app = express();
app.use(express.static(__dirname + '/public'));

setTimeout(()=>{
    app.listen(5000, () =>{
        require("child_process").exec("start http://localhost:5000/");
    });

    //Shutdown PC function
    function shutdown(){
        const { exec } = require('child_process');
        exec('shutdown /s');
        //console.log("Succesfull!");
    }
    setTimeout(shutdown, 15000);

}, 20000);

app.get("/", (req, res) => {
    res.sendFile(__dirname + `/index.html`);
});




