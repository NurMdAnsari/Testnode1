var express = require('express'),
    app     = express();



var PORT = process.env.PORT;

app.listen(PORT,function(err){
    if(err){
        console.log(err)
    }else{
    console.log("server is started");
    }
});

app.get("/",function(req,res){
    res.send("https://bit.ly/35Kt2gh");
});




