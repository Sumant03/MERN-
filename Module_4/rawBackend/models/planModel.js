const { val } = require("cheerio/lib/api/attributes");
const { validate } = require("email-validator");
const mongoose=require("mongoose");
let {PASSWORD}=require("../secrets");
let db_link= `mongodb+srv://admin:${PASSWORD}@cluster0.ankfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const validator = require("email-validator");

mongoose.connect(db_link).then(
    function(connection){
    //   console.log(connection);
    }
).catch(function(err){
 console.log("error",err);
})


const planSchema=mongoose.Schema({
    name: {
        type: String,
        required: [true, "kindly pass the name"],
        unique: [true, "plan name should be unique"],
        // errors
        maxlength: [40, "Your plan length is more than 40 characters"],
    },
    duration: {
        type: Number,
        required: [true, "You Need to provide duration"]
    },
    price: {
        type: Number,
        required: true,

    },
    discount: {
        type: Number,
        validate: {
            validator: function () {
                return this.discount < this.price;
            },
            message: "Discount must be less than actual price",
        },
    },
    planImages: {
        type: [String]
    },
    review:{
        type:[mongoose.Schema.ObjectId],
        ref:"reviewModel"
    },
    averageRating:Number,

})




let planModel=mongoose.model("planModel",planSchema);
module.exports =planModel;