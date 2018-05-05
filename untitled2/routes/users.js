

const express = require('express');
const router = express.Router();
const User=require('../models/user');
const jwt = require('jsonwebtoken');
const config=require('../config/database');
const passport =require('passport');
const Company=require('../models/company');

const Companys=require('../models/companys');
const bittrex = require('node-bittrex-api');
router.post("/register",function (req,res) {
    const newUser= new User({

        username:req.body.username,
        name:req.body.name,
        email:req.body.email,
         password:req.body.password


    });
    User.saveUser(newUser,function (err,user) {
        if(err){
            res.json({state:false,msg:"used email"});
        }
        if(user){
            res.json({state:true,msg:"data inserted"});
        }

    });

});

router.post("/login",function (req,res) {

    const email = req.body.email;
    const password = req.body.password;

    User.findByEmail(email,function (err,user) {
        if(err) {
            console.log(err);
        }

        if(!user){
            res.json({state:false,msg:"data not inserted"});
            return false;
        }



        User.passwordCheck(password,user.password,function (err,match) {
         if(err){
             console.log("a")
             res.json({state:false,msg:'data not inserted'});
             throw err};
         if(match){
             const token = jwt.sign(user,config.secret,{expiresIn:86400});
             console.log(user.name);
             res.json(
                 {
                     state:true,
                     token:"JWT " + token,
                     user:{
                         id:user._id,
                         name:user.name,
                         username:user.username,
                         email:user.email,

                     }
                 }
                 )
         }
            if(!match){
             res.json({state:false,msg:'incorect password'});
             console.log("waradi");
                return false;
         }
        });

    });

});




 setInterval(function () {
     //console.log("a");
 bittrex.getmarketsummary( { market : 'BTC-LTC'}, function( data, err ) {
      if(err)
      console.log(err);

      if(data) {
      console.log(data.result);
      const nw = new Company({
      market:data.result,
      date:"2014-02-13T00:00:00",
      mname:"",
      bid:102.0,
      ask:102.0,
          low:0,
          high:0,
          last:0});
     // console.log("s");
      //console.log(nw);

  Company.savemarket(nw, function (err, user) {
      if (err) {
      console.log("not save");
      }
      if (user) {
      console.log("save");
      }

      });

      }

      });
      },10000);

setInterval(function () {
    console.log("a");
    bittrex.getmarketsummary( { market : 'BTC-GBYTE'}, function( data, err ) {
        if(err)
            console.log(err);

        if(data) {
            console.log(data.result);
            const nw = new Company({
                market:data.result,
                date:"2014-02-13T00:00:00",
                mname:"",
                bid:102.0,
                ask:102.0,
                low:0,
                high:0,
                last:0});
            console.log("s");
            console.log(nw);
            Company.savemarket(nw, function (err, user) {
                if (err) {
                    console.log("not save");
                }
                if (user) {
                    console.log("save");
                }

            });
        }

    });
},10000);
setInterval(function () {
    console.log("a");
    bittrex.getmarketsummary( { market : 'BTC-ETH'}, function( data, err ) {
        if(err)
            console.log(err);

        if(data) {
            console.log(data.result);
            const nw = new Company({
                market:data.result,
                date:"2014-02-13T00:00:00",
                mname:"",
                bid:102.0,
                ask:102.0,
                low:0,
                high:0,
                last:0});
            console.log("s");
            console.log(nw);
            Company.savemarket(nw, function (err, user) {
                if (err) {
                    console.log("not save");
                }
                if (user) {
                    console.log("save");
                }

            });
        }

    });
},10000);
setInterval(function () {
    console.log("a");
    bittrex.getmarketsummary( { market : 'BTC-DASH'}, function( data, err ) {
        if(err)
            console.log(err);

        if(data) {
            console.log(data.result);
            const nw = new Company({
                market:data.result,
                date:"2014-02-13T00:00:00",
                mname:"",
                bid:102.0,
                ask:102.0,
                low:0,
                high:0,
                last:0});
            console.log("s");
            console.log(nw);
            Company.savemarket(nw, function (err, user) {
                if (err) {
                    console.log("not save");
                }
                if (user) {
                    console.log("save");
                }

            });
        }

    });
},10000);
setInterval(function () {
    console.log("a");
    bittrex.getmarketsummary( { market : 'BTC-BCC'}, function( data, err ) {
        if(err)
            console.log(err);

        if(data) {
            console.log(data.result);
            const nw = new Company({
                market:data.result,
                date:"2014-02-13T00:00:00",
                mname:"",
                bid:102.0,
                ask:102.0,
                low:0,
                high:0,
                last:0});
            console.log("s");
            console.log(nw);
            Company.savemarket(nw, function (err, user) {
                if (err) {
                    console.log("not save");
                }
                if (user) {
                    console.log("save");
                }

            });
        }

    });
},10000);










//get profile





     router.get("/profile", passport.authenticate('jwt', {session: false}), function (req, res) {
         res.json({user: req.user});


     });


     router.post("/ss", function (req, res) {

         const name = req.body.name;
         Companys.test(name, function (err, sum) {
             if (err) {
                 console.log(err);
             }
             if (!sum) {
                 res.json({state: false, msg: "data not inserted"});
                 return false;
             }


             console.log(sum);

             res.json({
                 state: true,
                 cname: sum.cname,
                 data: sum.data,


             });
         })

     });





 //update email


     router.post("/update", function (req, res) {
         const data = {
             id: req.body.id,
             email: req.body.email
         };
         console.log(data.email);
         User.findbyid(data, function (err, re) {
             if (err) {
                 //console.log(err);
                 res.json({state: false, msg: "Email is allready exist"});
                 return false;
             }
             if (re.nModified==1) {
                 console.log(re);
                 res.json({state: true, msg: "Email update"});

             }
             if (re.nModified==0) {
                 console.log(re);
                 res.json({state: false, msg: "Email not update"});

             }
         })

     });






//update password
router.post("/updatepassword", function (req, res) {
    const data = {

        id:req.body.id,
        password:req.body.password
    };
    console.log(data.password);
    User.updatepassword(data, function (err, re) {
        if (err) {
            //console.log(err);
            res.json({state: false, msg: "password not update"});
            return false;
        }
        if (re.nModified==1) {
            console.log(re);
            res.json({state: true, msg: "password update"});

        }
        if (re.nModified==0) {
            console.log(re);
            res.json({state: false, msg: "password not update"});

        }
    })

});





//get bid and ask in one market

     router.post("/getaskbid", function (req, res) {
    const data = {
        name: req.body.cname,
    };
    console.log(data)

    Company.findbyAskBid(data, function (err, re) {
        if (err) {

            console.log(err);
            res.json({state: false, msg: "err"});
        }

        if (re) {
            console.log(re);
            res.json(re)
        }


    });
});





// candlestick 30minute data get
  router.post("/getcandlestic30minute", function (req, res) {

    const data = {
        cname:req.body.cname,
    };
    console.log(data)
    Companys.getcandlestic30minute(data, function (err, re) {


        if (err) {

            console.log(err);
            res.json({state: false, msg: "erro"});
        }

        if (re) {
            console.log(re);
            res.json(re)
        }


    });



});




// candlestick hour data get
router.post("/getcandlestichour", function (req, res) {

    const data = {
        cname:req.body.cname,
    };
    console.log(data);
    Companys.getcandlestichour(data, function (err, re) {


        if (err) {

            console.log(err);
            res.json({state: false, msg: "err"});
        }

        if (re) {
            console.log(re);
            res.json(re)
        }


    });



});





// candlestick day data get
router.post("/getcandlesticday", function (req, res) {

    const data = {
        cname:req.body.cname,
    };
    console.log(data);
    Companys.getcandlesticday(data, function (err, re) {


        if (err) {

            console.log(err);
            res.json({state: false, msg: "err"});
        }

        if (re) {
            console.log(re);
            res.json(re)
        }


    });



});




//get spread value

router.post("/getspead", function (req, res) {

    const data = {
        cname:req.body.cname,
    };
    Company.getspread(data, function (err, re) {
        if(err){

            console.log(err);
            res.json({state: false, msg: "err"});
        }
        if (re) {
            console.log(re);
            res.json(re)
        }

    });
});

//update watchlist item


router.post("/updatewatchlist", function (req, res) {

    const data = {
        id:req.body.id,
        cname:req.body.cname
    };
    User.updatewatchlist(data, function (err, re) {
        if(err){

            console.log(err);
            res.json({state: false, msg: "watchlist not update"});
        }
        if (re.nModified==1) {
            console.log(re);
            res.json({state: true, msg: "watchlist update"});

        }
        if (re.nModified==0) {
            console.log(re);
            res.json({state: false, msg: "watchlist not update"});

        }

    });
});


//delet watchlist item

router.post("/deletewatchlist", function (req, res) {

    const data = {
        id:req.body.id,
        cname:req.body.cname

    };
    console.log(data)
    User.deletewatchlist(data, function (err, re) {
        if(err){

            console.log(err);
            res.json({state: false, msg: "not delete"});
        }
        if (re) {
            console.log(re);
            res.json({state: true, msg: "delete"});

        }
        else {
            console.log(re);
            res.json({state: true, msg: "not delete"});

        }

    });
});



// display watch list



router.post("/displaywatchlist", function (req, res) {

    const data = {
        id:req.body.id,
    };

    User.displaywatchlist(data, function (err, re) {
        if(err){

            console.log(err);
            res.json({state: false, msg: "err"});
        }
        if (re) {
            console.log("aa");
            console.log(re);
            res.json(re[0].market)
        }

    });
});
router.post("/getpaslast", function (req, res) {

    const data = {
        cname:req.body.cname,
    };
    Company.getpaslast(data, function (err, re) {
        if(err){

            console.log(err);
            res.json({state: false, msg: "err"});
        }
        if (re) {
            console.log(re);
            res.json(re)
        }

    });
});


module.exports= router;