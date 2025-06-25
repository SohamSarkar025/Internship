
const express=require("express")
const {getUser,createUser,getUserById,updateUser,deleteUser}=require("../controllers/userController")

const router=express.Router()
router.get("/",getUser)
router.post("/",createUser)
router.get("/:id",getUserById)
router.put("/:id",updateUser)
router.delete("/:id",deleteUser)

module.exports=router
