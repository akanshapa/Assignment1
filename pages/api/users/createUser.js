// pages/api/search.js

import {connectDb}   from '@/pages/db/index.js';
import {User} from '@/pages/models/user.model.js'



 const createUser = async function POST(req,res){
  try {
    await connectDb();
  
    const {firstName,lastName,contactNumber,location} = req.body;
    
    if(!firstName||!lastName||!contactNumber||!location){
      res.status(400).json({message:"All fields are required"});
    }
    
    const user = await User.findOne({contactNumber});
    if(user){
      return res.status(500).json({message:"User already exsist"});
    }
    const newUser = await User.create({
        firstName,
        lastName,
        location,
        contactNumber
    })
    return res.status(200).json({data:newUser,message:"User created successfully"});
  } catch (error) {
    console.log("error while fetching user: ",error);
  }
}


export default createUser;