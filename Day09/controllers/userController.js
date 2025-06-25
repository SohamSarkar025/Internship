const User=require("../models/userModel")

// get all data
const getUser=async(req,res)=>{
    try{
        const user=await User.find()
        res.json(user)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

// create user
const createUser=async(req,res)=>{
    const {name,email,password}=req.body
    try{
        const newUser=await User.create({name,email,password})
        res.status(201).json(newUser)
    }catch(error){
        res.status(400).json({message:error.message})
    }
}

// get user by id
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);  // Perfect for _id lookups
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update user
const updateUser=async(req,res)=>{
    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id,
            req.body,{new:true})

            if(!updateUser) return
            res.status(404).json({message: "user not found"})
            res.json(updatedUser)

    }catch(error){
        res.satus(500).json({message:error.message})
    }
}

// delete user

const deleteUser=async(req,res)=>{
    try{
        const deletedUser=await User.findByIdAndDelete(req.params.id)

            if(!deletedUser) return
            res.status(404).json({message: "user is deleted"})
            res.json(deletedUser)

    }catch(error){
        res.satus(500).json({message:error.message})
    }
}
module.exports={getUser,createUser,getUserById,updateUser,deleteUser}
