// pages/api/search.js

import {connectDb}   from '@/pages/db/index.js';
import {User} from '@/pages/models/user.model.js'



 const getUser = async function GET(req,res){
  try {
    await connectDb();
  
    const {name} = req.query;
    
    if(!name){
      res.status(400).json({message:"Unable to fetch name from query"});
    }
    const firstName = name.split(" ")[0];
    const lastName = name.split(" ")[1];
    console.log("First name : ",firstName);
    console.log("First name : ",lastName);
    const user = await User.find({$or:[{firstName},{lastName}]});
    console.log(user);
    if(!user){
      return res.status(500).json({message:"Unable to fetch user"});
    }
  
    return res.status(200).json({data:user,message:"User fetched successfully"});
  } catch (error) {
    console.log("error while fetching user: ",error);
  }
}


export default getUser;

