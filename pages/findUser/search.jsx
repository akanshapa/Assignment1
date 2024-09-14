// pages/search.js
"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';

import { IoSearchOutline } from "react-icons/io5";
import axios from 'axios';
import { IoLocationSharp } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
const Search = () => {
  const router = useRouter();
  const { term } = router.query; 
  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
   
  useEffect(() => {
    if (term) {
      setLoading(true);
      setError('');
      async function fetchData (){
        try {
          const info = await axios.get(`/api/search/search?name=${term}`);
          setUsers(info.data.data);  
          setLoading(false);
          if (info.data.data.length === 0) {
            router.push(`/error/NoUser?term=${term}`);
          }
        } catch (error) {
         console.log("Error while fetching user",error); 
         setError(error);
        }
      }

      fetchData();
    }
  }, [term]);

  return (
    <>  {/* Navbar */}
    <nav className="flex justify-around items-center p-4  shadow-lg">
      <div className="w-[150px] cursor-pointer">
        <img src="/Logo.png" alt="Girman Logo" />
      </div>
      <div className="flex items-center p-2 gap-4 rounded-lg border-2">
      <IoSearchOutline />
        <input
          type="text"
          placeholder="Search user..."
          value={term || ''}
          className="bg-white w-[400px]"
          disabled
        />
      </div>
    </nav>
    <div className='p-24 bg-[#d2e1ff]'>
    {/* User Cards */}
    <div className="flex flex-wrap gap-12 ">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
          <img src='/error.png' alt='error'/>
      ) :(
        users.map((user, index) => (
          <div className="bg-white w-[300px] h-[240px] rounded-2xl p-2" key={index}>
            <div className="h-full w-full p-2">
              {
                user.profileImage?(<img
                  src={`${user.profileImage}`}
                  alt={user.firstName}
                  className="w-[80px] h-[80px] rounded-full object-fill"
                />):(
                  <img
                  src="https://via.placeholder.com/60"
                  alt={user.firstName}
                  className="rounded-full mr-[160px]"
                />
                )
              }
              <h3 className=' mr-[100px] mt-4 text-lg font-bold'>{user.firstName} {user.lastName}</h3>
              <p><strong className='flex items-center font-thin mr-[150px] gap-2'><IoLocationSharp/> {user.location}</strong></p>
              <p className='flex gap-2 mt-4'>
              <strong className='flex items-center font-thin gap-1'><IoCallOutline /> {user.contactNumber}</strong> 

              {/* Dialog for Fetch Details */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-sm  w-28 h-12 hover:bg-blue-700 bg-black text-white rounded-lg">Fetch Details</button>
                </DialogTrigger>
                <DialogContent className="bg-white">
                  <DialogTitle className="text-xl text-bold">Fetch's Details</DialogTitle>
                  <p>Here are details of following Employee</p>
                  <DialogDescription>
                  <strong className='text-[16px] text-black'>Name:{`${user.firstName} ${user.lastName}`}</strong> 
                  <br />
                    <strong className="text-[16px] text-black">Location:{user.location}</strong> 
                    <br />
                    <strong className="text-[16px] text-black">Contact Number: {user.contactNumber}</strong>
                    <br/>
                    {
                      user.profileImage&&(
                       <div>
                         <strong className='text-black mt-2'>Profile Image: </strong>
                         <br/>
                         <img src={user.profileImage} className='h-[150px] mt-2 object-contain' alt="user image" />
                       </div>
                      )

                    }
                  </DialogDescription>
                </DialogContent>
              </Dialog>
              </p>
            </div>
          </div>
        ))
      ) 
    }
    </div>
    
  </div>
    </>
  
  );
};

export default Search;
