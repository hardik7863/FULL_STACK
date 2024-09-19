const mongoose=require("mongoose");
const validator=require("validator");
const userSchema =mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        minlength:[3,"Name must be 3 character long"],
        maxlength:[3,"Name cannot exceed 50 character"],
        // since it can consider 1234567 be a name hence we will use the validator here
        validate:{
            validator:function(value){
            // if(typeof value !=="string"){
            //    return false;
            // }
            return validator.isAlpha(value,"en-US") //it is doing the same as above commented part
            },message:"Name shoukd be in String"
        }
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        validate:{
            validator:function(value){
             return validator.isEmail(value);
            },
            message:"Please Enter a valid email address"
        }
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:[8,"Password Must be 8 character long"],
        maxlength:[128,"Password cannot exceed 128 characters"],
        validate:{
            validator:function(value){
                return validator.isStrongPassword(value,{
                    minLength:8,
                    minLowercase:1,
                    minUppercase:1,
                    minNumbers:1,
                    minSymbols:1
                })
            },
            message:"Password must be stronger"
        }
    },
    phoneNumber:{
        type:String,
        required:[true,"Phone Number is required"],
        validate :{
            validator:function(value){
                return validator.isMobilePhone(value,"en-IN")
            },
            message:"Please Enter a valid Phone Number"
        }
    }
})
module.exports =mongoose.model("User",userSchema);