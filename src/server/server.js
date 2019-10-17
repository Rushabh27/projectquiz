var express=require('express')
var bodyparser=require('body-parser')
var app=express()
app.use(bodyparser.json())

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
//all db things are here
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/mydb", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
/*var userschema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password:String
}, {collection : 'user'});
var user = mongoose.model("user", userschema);*/
var user=require('./schemas/user')
var cat=require('./schemas/cat')
    app.post('/login',async (req,res)=>{
       // console.log("email by youu:"+req.body.email)
        //console.log("is there any email with tvd present?  "+user.findOne({email:'tanujdoshi3920@hmail.com'}))
        const {email,password} = req.body
        const resp=await user.findOne({email,password})
        if(!resp)
        {
              console.log("incorrect")
              res.status(500).json({
                isLogin: false
                });
        }
        else
        {
            console.log("correct details")
            res.status(200).json({
                isLogin: true
                });

        }
    })

    app.post('/register',(req,res)=>{
       new user({ fname: req.body.fname,
            lname: req.body.lname,
            email:req.body.email,
            password:req.body.password,
            cpassword:req.body.cpassword}).save(function(err,data){
                if(err)
                {
                    console.log("oh no");
                    res.status(500).json({
                        isSucceed: false
                        });
                }
                else{
                    console.log(data)
                    console.log("success")
                    res.status(200).json({
                    isSucceed: true
                    });
                }

            })
      //  console.log(req.body)
    })
    // app.post('/c',(req,res)=>{
    //     new cat({
    //         id:"1",
    //         cname:"pousyd"
    //     }).save(function(err,data){
    //         if(err)
    //         {
    //             console.log(err)
    //         }
    //         else{
    //             console.log(data)
    //         }
    //     })
    // })
    app.get('/cat',(req,res)=>{
    //  cat.find(function(err,cname){
    //      if (err)
    //      {
    //          console.log("error")
    //          console.log(err);
    //      }
    //      else{
    //          console.log(cname);
    //          res.json(cname);
    //      }
    //  });
    cat.find(function(err,us){
        if(err)
        {
            console.log(err)
        }
        else{
            console.log(us)
            res.json(us)
        }
    })

    });
  

app.listen(8000,()=>console.log('server is listening at 8000'));