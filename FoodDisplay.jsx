import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context/MainContext';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Card from './Card';

const FoodDisplay = () => {

    const { food_list, category, counter, setCounter } = useContext(Context);

    const [itemcount, setItemcount] = useState({});

    useEffect(
        () => {
            setItemcount(0)
        }, []
    )

    // const handleIncrement = (index) => {
    //     setItemcount(prev => {
    //         const newCounts = [...prev];
    //         newCounts[index]++;
    //         return newCounts;
    //     });
    // };


    // const handleDecrement = (index) => {
    //     setItemcount(prev => {
    //         const newCounts = [...prev];
    //         if (newCounts[index] > 0) {
    //             newCounts[index]--;
    //         }
    //         return newCounts;
    //     });
    // };


    const Filter_food_list =
        food_list.filter(
            (d) => {


                if (d.category == category) {
                    return true;
                }
            }
        )




    return (
        <div className='mt-10'>

            <div className='text-3xl font-bold text-start px-5 mt-5 mb-10'>
                Top dishes near you
            </div>
            <div className='grid grid-cols-4 gap-5 duration-500 '>
                {

                    category === null ?
                        food_list.map(
                            (d, index) => {
                                return (
                                    <div>
                                    <div data-aos="zoom-in-up" className=' overflow-hidden rounded-xl shadow-lg pb-5 '>
                                                                <div>
                                                                    <img src={d.image} alt="" />
                        
                                                                    {
                                                                        !itemcount ?
                                                                            <img onClick={() => setItemcount(itemcount + 1)} src="/images/add_icon_white.png" alt="" /> :
                                                                            <div>
                                                                                <img onClick={() => setItemcount(prev => ({ ...prev, [d._id]: prev - 1 }))} src="/images/remove_icon_red.png" alt="" />
                                                                                <p>{itemcount}</p>
                                                                                {/* <p>{itemcount[index]}</p> */}
                                                                                <img onClick={() => setItemcount(prev => ({ ...prev, [d._id]: prev + 1 }))} src="/images/add_icon_green.png" alt="" />
                                                                            </div>
                        
                                                                    }
                                                                </div>
                        
                                                                {/* <div onClick={()=>{setCounter(counter-1)}} className='text-xl text-center'>
                                                            + {counter}
                                                        </div> */}
                        
                                                                <div className='px-5'>
                                                                    <div className='flex justify-between pt-5 pb-3 items-center'>
                                                                        <div className='text-xl font-bold '>
                                                                            {d.name}
                                                                        </div>
                        
                                                                        <div className='flex '>
                        
                                                                            <FaStar className='text-[yellow] overflow-hidden' />
                                                                            <FaStar className='text-[yellow] overflow-hidden' />
                                                                            <FaStar className='text-[yellow] overflow-hidden' />
                                                                            <FaStar className='text-[yellow] overflow-hidden' />
                        
                                                                            <CiStar />
                        
                                                                        </div>
                                                                    </div>
                                                                    <div className='text-sm text-gray-600 '>
                                                                        {d.description}
                                                                    </div>
                                                                    <div className='text-[orange] text-2xl font-bold pt-3'>
                                                                        ${d.price}
                                                                    </div>
                        
                                                                </div>
                        
                        
                                                            </div>
                                </div>
                                )
                            }
                        )

                        :
                        Filter_food_list.map(
                            (d, i) => {
                                return <div data-aos="zoom-in-up" className=' overflow-hidden rounded-xl shadow-lg pb-5 '>
                                    <div>
                                        <img src={d.image} alt="" />

                                        {
                                            !itemcount ?
                                                <img onClick={() => { setItemcount(prev => prev + 1) }} src="/images/add_icon_white.png" alt="" /> :
                                                <div>
                                                    <img onClick={() => { setItemcount(prev => prev - 1) }} src="/images/remove_icon_red.png" alt="" />
                                                    <p>
                                                        {itemcount}
                                                    </p>
                                                    <img onClick={() => { setItemcount(prev => prev + 1) }} src="/images/add_icon_green.png" alt="" />
                                                </div>
                                        }
                                    </div>

                                    <div className='px-5'>
                                        <div className='flex justify-between pt-5 pb-3 items-center'>
                                            <div className='text-xl font-bold '>
                                                {d.name}
                                            </div>

                                            <div className='flex '>

                                                <FaStar className='text-[yellow] overflow-hidden' />
                                                <FaStar className='text-[yellow] overflow-hidden' />
                                                <FaStar className='text-[yellow] overflow-hidden' />
                                                <FaStar className='text-[yellow] overflow-hidden' />

                                                <CiStar />

                                            </div>
                                        </div>
                                        <div className='text-sm text-gray-600 '>
                                            {d.description}
                                        </div>
                                        <div className='text-[orange] text-2xl font-bold pt-3'>
                                            ${d.price}
                                        </div>

                                    </div>


                                </div>

                            }
                        )
                }
            </div>
        </div>
    );
}

export default FoodDisplay;
