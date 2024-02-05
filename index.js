
const express=require("express")
const app=express()
const port=5432;
const BodyParser=require("body-parser")
require("./models");
var userCtrl=require("./controller/userController.js");

app.use(BodyParser.json())
app.get("/",(req,res)=>{
    res.send("hello world this is my first node js app")
}
)
app.get("/add",userCtrl.addUsers);

app.get("/users",userCtrl.getUsers);

app.get("/users/:id",userCtrl.getUser);

app.delete("/users/:id",userCtrl.deleteUser);

app.post("/users",userCtrl.postUser);

app.patch("/users/:id",userCtrl.patchUser);

app.get("/userdata/",userCtrl.queryUser);
// User.sync({force:true})
// Contact.sync({force:true}) instead of using this we use sequelize.sync({force:true}) in model section index.
app.listen (port,()=>
{
    console.log("hellow your port is runnin on the number http//www.localhost/",port);
})
//hello this is testing webhooks in jenkins--