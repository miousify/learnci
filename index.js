let express= require('express');

let app= express()
app.get("/", function (req,res ){
    res.send("send")
})
app.listen(4000,function () {
    console.log("i am running")
})