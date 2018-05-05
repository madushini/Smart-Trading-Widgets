const mongoose= require('mongoose');

const bittrex = require('node-bittrex-api');

const schema = mongoose.Schema;
const companysSchema = new schema({
    name:{type:String},
    cname:{type:Array},
    data:{type:Array}




});





const companys = module.exports = mongoose.model("companys", companysSchema);
module.exports.test = function (sum, callback) {
    const query = {name: sum};
    companys.findOne(query, callback);
console.log("compnys awa");

    console.log(sum);

}






// get candlestic month
module.exports.getcandlesticday = function (data, callback) {

    const query = [{$unwind:"$Market"},



        {$unwind:"$Market.details"}

        ,{$project:{
            "name":"$Market.MarketName",
            "date":{$add:["$Market.details.T",19800000]},
            "year": {$year:{$add:["$Market.details.T",19800000]}},
            "month": {$month:{$add:["$Market.details.T",19800000]}},
            "minute": {$minute:{$add:["$Market.details.T",19800000]}},
            "hour": {$hour:{$add:["$Market.details.T",19800000]}},
            "day": {$dayOfMonth:{$add:["$Market.details.T",19800000]}},
            "O":"$Market.details.O" ,
            "H":"$Market.details.H" ,
            "L":"$Market.details.L" ,
            "C":"$Market.details.C",
        }},
        {$match:
            {

                name:data.cname,minute:0,hour:0

            }},

        {$sort:{day:1}}
    ];

    companys.aggregate(query, callback);

}






module.exports.getcandlestichour = function (data, callback) {

    const query = [{$unwind:"$Market"},



        {$unwind:"$Market.details"}

        ,{$project:{
            "name":"$Market.MarketName",
            "date":{$add:["$Market.details.T",19800000]},
            "year": {$year:{$add:["$Market.details.T",19800000]}},
            "month": {$month:{$add:["$Market.details.T",19800000]}},
            "minute": {$minute:{$add:["$Market.details.T",19800000]}},
            "hour": {$hour:{$add:["$Market.details.T",19800000]}},
            "day": {$dayOfMonth:{$add:["$Market.details.T",19800000]}},
            "O":"$Market.details.O" ,
            "H":"$Market.details.H" ,
            "L":"$Market.details.L" ,
            "C":"$Market.details.C",
        }},
        {$match:
            {

                name:data.cname,minute:0

            }},

        {$sort:{day:1,hour:1}}
    ];

    companys.aggregate(query, callback);

}





module.exports.getcandlestic30minute = function (data, callback) {

    const query = [{$unwind:"$Market"},



        {$unwind:"$Market.details"}

        ,{$project:{
            "name":"$Market.MarketName",
            "date":{$add:["$Market.details.T",19800000]},
            "year": {$year:{$add:["$Market.details.T",19800000]}},
            "month": {$month:{$add:["$Market.details.T",19800000]}},
            "minute": {$minute:{$add:["$Market.details.T",19800000]}},
            "hour": {$hour:{$add:["$Market.details.T",19800000]}},
            "day": {$dayOfMonth:{$add:["$Market.details.T",19800000]}},
            "O":"$Market.details.O" ,
            "H":"$Market.details.H" ,
            "L":"$Market.details.L" ,
            "C":"$Market.details.C",
        }},
        {$match:
            {

                name:data.cname

            }},

        {$sort:{day:1,hour:1,minute:1}}
    ];

    companys.aggregate(query, callback);

}


