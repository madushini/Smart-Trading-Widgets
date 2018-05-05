const mongoose= require('mongoose');
const bcrypt=require('bcryptjs');
const schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = new schema({
   username:{type:String,required:true},
    name:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    market:{mname:{type:String}}

});

userSchema.plugin(uniqueValidator);

const User =module.exports=mongoose.model("user",userSchema);

module.exports.saveUser=function(newUser,callback){
//pasword hashing
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
           newUser.password=hash;

           if(err) throw err;
           //data insert data base
            newUser.save(callback);
        });
    });

};




module.exports.findByEmail =function (email,callback) {Y
   //email cheking
    const query={email:email};
    User.findOne(query,callback);


}




module.exports.passwordCheck =function (plainpassword,hash,callback) {
    // bycript pasword ann cheak
    bcrypt.compare(plainpassword, hash, function(err, res) {
        if(err) throw err;
        if(res){
            callback(null,res);
        }if(!res){
            callback(err,null);
        }

    });
    
};


module.exports.findUserById=function (id,callback) {

  User.findOne(id,callback);
};








// edit email
module.exports.findbyid=function (data,callback) {
    console.log("sabjvsajdvsajdvsja");
    console.log(callback);
    const quary1={_id:data.id};
    const quary2={"email":data.email};
    console.log(quary2);
    User.update(quary1,quary2,callback);
};



//edit password

module.exports.updatepassword=function (data,callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(data.password, salt, function(err, hash) {
            data.password=hash;
    console.log(data.password);
    const quary1={_id:data.id};
    const quary2={"password":data.password};
    console.log(quary2);
    User.update(quary1,quary2,callback);

        });
    });
};




//delet watchlist item



module.exports.updatewatchlist=function (data,callback) {
    console.log("sasas");
console.log(data.cname.cname);
    const quary1={_id:data.id};
    const quary2={$push:{"market":{mname:data.cname.cname}}}
    User.update(quary1,quary2,callback);
}







//delet watch list item


module.exports.deletewatchlist=function (data,callback) {

    console.log("sasfsdsdasdas");
    console.log(data);
    const quary1={_id:data.id};
    const quary2={$pull:{market:{mname:data.cname}}}
    User.findOneAndUpdate(quary1,quary2,callback);
}








//display watchlist

module.exports.displaywatchlist=function (data,callback){

    const quaey1={"_id":data.id}
    const quaey2={"_id":0,"market.mname":1}

    User.find(quaey1,quaey2,callback);
}