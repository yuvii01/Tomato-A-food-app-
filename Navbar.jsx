import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [navitem, setNav] = useState("home");


    const navitems = [
        {
            name: "home",
            link: "/"

        },
        {
            name: "menu",
            link: "/menu"

        },
        {
            name: "mobile-app",
            link: "/mobile-app"
        },
        {
            name: "contact-us",
            link: "/contact-us"
        }

    ]









    // useEffect(
    //     ()=>{
    //        console.log(navitem)
    //     },
    //     navitem
    // )


    return (


        <div className='mt-5 mb-10'  >
            <div className='flex  justify-between'>
                <div>
                    <img src="/images/logo.png" alt="" />
                </div>

                <nav>
                    <ul className='flex gap-10 my-2 px-10'>


                        {
                            navitems.map(
                                (d, i) => {
                                    return(
                                        <Link key={i} to={`${d.link}`}>
                                            <li key={i + 1} onClick={() => {
                                                setNav(d.name)
                                            }
                                            } className={` ${navitem == d.name ? 'border-b py-[2px] border-gray-800 ' : ''} cursor-pointer font-semibold  duration-100 text-gray-800  hover:text-amber-600`}>
                                                {d.name}
                                            </li>
                                        </Link>
                                    )

                                }




                            )
                        }
                    </ul>
                </nav>

                <div className='flex items-center gap-10
'>
                    <img className='cursor-pointer' src="/images/search_icon.png" alt="" />
                    <img className='cursor-pointer' src="/images/basket_icon.png" alt="" />



                    <button className='px-10 py-2  rounded-full border border-amber-600 text-gray-800 font-semibold'>sign in</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
