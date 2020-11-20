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
    res.redirect("https://chat.whatsapp.com/L6SEocIk7Go8PHFySgGyuC");
});
app.use((req,res,next)=>{ res.send("hi")});




