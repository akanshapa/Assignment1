"use client"
import React, { useState } from 'react';


import { useRouter } from 'next/router';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm) {
      router.push(`/findUser/search?term=${searchTerm}`);
    }
  };

  return (
    <>
    <nav className="flex justify-between items-center p-4 shadow-xl">
        <div className="w-[150px] ml-20 h-[35px]">
          <img src="/Logo.png" alt="Girman Logo" />
        </div>
        <ul className="flex gap-4 mr-10">
          <li><a className="text-blue-600 cursor-pointer underline">SEARCH</a></li>
          <li><a href="https://www.girmantech.com/" target="_blank" rel="noopener noreferrer">WEBSITE</a></li>
          <li><a href="https://www.linkedin.com/company/girmantech/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
          <li><a href="mailto:contact@girmantech.com">CONTACT</a></li>
        </ul>
      </nav>
      <div className="flex flex-col mt-[150px] items-center h-full">

      <div className=" flex">
        
        <img src="/Group1.png" alt='img1' />
        <img src="/Group141.png" alt='img2' />
      </div>
      
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
        className="mt-20 p-4 rounded-lg w-[800px] h-[60px] bg-white text-black"
      />
    </div>
    </>
    
  );
};

export default Home;
