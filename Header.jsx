import React from 'react';

const Header = () => {
    return (
        <div className='header-bg  bg-cover  rounded  h-[500px]  '>
          

            <div className='text-white pt-[150px] px-[100px]'>
                <div className='text-7xl font-semibold '>
                    Order your <br /> favourite food here
                </div>
                <div className='pt-5 pe-[300px]'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur dicta asperiores aspernatur suscipit voluptates atque odio debitis beatae hic quam, explicabo doloremque accusamus sed optio dolorem vel magni tenetur ut.
                </div>


                <div className='pt-5 '>
                    <button className='py-2 px-10 text-amber-600 hover:bg-amber-100 bg-white rounded-full  '> View More</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
