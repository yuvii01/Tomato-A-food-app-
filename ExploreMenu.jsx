import React, { useContext, useEffect } from 'react';
import { Context } from '../Context/MainContext';



const ExploreMenu = () => {

const {category, setCategory} = useContext(Context);

useEffect(
    ()=>{
setCategory(null )
    },[]
)
   const menu_list = [
        {
            menu_name: "Salad",
            menu_image:'images/menu_1.png'
        },
        {
            menu_name: "Rolls",
            menu_image: 'images/menu_2.png'
        },
        {
            menu_name: "Deserts",
            menu_image: 'images/menu_3.png'
        },
        {
            menu_name: "Sandwich",
            menu_image: '/images/menu_4.png'
        },
        {
            menu_name: "Cake",
            menu_image:'images/menu_5.png'
        },
        {
            menu_name: "Pure Veg",
            menu_image: 'images/menu_6.png'
        },
        {
            menu_name: "Pasta",
            menu_image: 'images/menu_7.png'
        },
        {
            menu_name: "Noodles",
            menu_image: 'images/menu_8.png'
        }]


    return (
        <div className='py-10'>
           
<div>
<div className='font-semibold text-4xl px-5'>
Explore our menu
            </div>

            <div className='text-gray-600 px-5 py-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non culpa fugiat est dolores delectus veniam officiis <br /> exercitationem similique Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, esse?

            </div>
</div>


            <div className='flex gap-[50px] overflow-x-scroll duration-500'>
                {
                    menu_list.map(
                        (d,i)=>{

return <div  onClick={()=>{setCategory(d.menu_name)}}  key={i} className={`  text-black rounded-full text-center cursor-pointer shrink-0  `}>
<img src={d.menu_image} className={`${category== d.menu_name ? ' rounded-full shadow-xl' : ' ' } rounded-full overflow-hidden my-3 h-[120px] w-[120px]`} alt="" />
<div className={`${category== d.menu_name ? ' border-b-[2px]  border-black py-2 ' : ' ' } font-semibold text-gray-800`}>
{d.menu_name} 
</div>
</div>
                        }
                    )
                }
            </div>
        </div>
    );
}

export default ExploreMenu;
