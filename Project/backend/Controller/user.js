const User=require("../model/user");

exports.signup=async (req,res)=>{
    try{
      const {name,email,password,phoneNumber} =req.body;
      const existingUser =await User.findOne({email:email});
      if(existingUser){
        return res.status(400).send({message :"User Already exist"});
      }
      const newuser =new User({
        name:name,
        email:email,
        password:password,
        phoneNumber:phoneNumber
      });

      await newuser.save();
      res.status(201).send({message:"User created"});
    }
    catch(err){
        if (err.name === "ValidatorError"){
         const errors =Object.values(err.errors).mao(error=> error.message);
         return res.status(400).json({
            message: "Validation error",
            error :errors

})        }
       res.status(500).send(err);   
}
};



exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const isExistingUser=await User.findOne({email:email});
        if(!isExistingUser){
            return res.status(404).send({message:"user not found"});
        };
        const isMatched=password===isExistingUser.password;
        if(!isMatched){
            return res.status(401).send({message:" invalid password"})
        }
        res.status(200).send({message:"user looged in",data:isExistingUser});
    }
    catch(error){
        res.status(500).send(error);
    }
}