import { useRouter } from 'next/router';
import { IoSearchOutline } from "react-icons/io5";
const NoUser = () => {
  const router = useRouter();
  const { term } = router.query; 
  return (
    <>
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
    <div className='flex items-center justify-center h-full'>
      <img src="/error.png" alt="" />
    </div>
    </>
  )
}

export default NoUser;
