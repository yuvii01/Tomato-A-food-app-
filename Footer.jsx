import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-neutral-700 my-10 '>
            <div className='grid gap-[50px] grid-cols-4'>


<div className=' col-span-2'>
   <div>
   <img src="/images/logo.png" alt="" />
   </div>
   <div>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt explicabo voluptas dolore commodi architecto esse nam soluta officia consequuntur reprehenderit porro fuga, quis obcaecati saepe cum sed vero aspernatur necessitatibus laudantium! Dolor quia esse eum, qui illum distinctio. Debitis, qui.
   </div>
   <div className='flex gap-5 justify-center'>
<div className='h-[50px] justify-center flex items-center w-[30px] border rounded-full border-black'>
<FaFacebookF />
</div>
<div className='h-[50px] justify-center flex items-center w-[30px] border rounded-full border-black'>
<FaTwitter />
</div>
<div className='h-[50px] justify-center flex items-center w-[30px] border rounded-full border-black'>
    
<FaYoutube/>
</div>

</div>

</div>






<div>
    <div className='font-bold text-xl '>
        Company
    </div>
    <div>
        <ul className='text-gray-600 text-sm '>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
</div>







<div>
    <div className='font-bold text-xl '>
        Get in Touch
    </div>

    <div>
        <ul className='text-gray-600 text-sm '>
            <li>+91-9928172190</li>
            <li>yuvrajmaheshwari07@gmail.com </li>
            
        </ul>
    </div>

</div>
            </div>l
        </div>
    );
}

export default Footer;
