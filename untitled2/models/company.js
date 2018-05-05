const mongoose= require('mongoose');
const bittrex = require('node-bittrex-api');

const schema = mongoose.Schema;
const appleSchema = new schema({
  market:{type:Array},
date:{type:Date},
    mname:{type:String},
    bid:{type:Number},
    ask:{type:Number},
    low:{type:Number},
    high:{type:Number},
    last:{type:Number},
    Volume:{type:Number},
    BaseVolume:{type:Number}
});



    const apple = module.exports = mongoose.model("apple", appleSchema);







    module.exports.savemarket=function(nw,callback){

       console.log("b");
console.log(nw);
nw.date=nw.market[0].TimeStamp;
nw.mname=nw.market[0].MarketName;
        nw.bid=nw.market[0].Bid;
        nw.ask=nw.market[0].Ask;
        nw.low=nw.market[0].Low;
        nw.high=nw.market[0].High;
        nw.last=nw.market[0].Last;
        nw.Volume=nw.market[0].Volume;
        nw.BaseVolume=nw.market[0].BaseVolume;
                nw.save(callback);
            }


//




module.exports.findbyAskBid=function (data,callback) {
        const query={mname:data.name};
        const query2={_id:0,date:1,ask:1,bid:1,mname:1,low:1,high:1,last:1,Volume:1,BaseVolume:1}


    apple.find(query,query2,callback).sort({$natural:-1}).limit(1);
}






module.exports.getspread=function (data,callback) {
    const query=[{$match:{  "mname" : data.cname}},
        {$group:
            {"_id":data.cname,
                time:{$last:"$date"}
                ,ask:{$last:"$ask"}
                , bid:{$last:"$bid"}
            }}

        ,{$project:{spred:{$multiply:[{$divide:[{$subtract:["$ask","$bid"]},"$ask"]},100]},date:{$add:["$time",19800000]}}}
    ];

    apple.aggregate(query,callback)
}





module.exports.getpaslast=function (data,callback) {

        const query=[{$match:{"mname" : data.cname}},{$project:{last:"$last","_id":0,date:"$date"}}
];

    apple.aggregate(query,callback)


    }







