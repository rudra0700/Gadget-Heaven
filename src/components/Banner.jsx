import React from 'react';
import bannerImg from '/banner.jpg'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate()
    
    return (
        <div className='relative'>
            <div className='min-h-[500px] bg-[#9538E2] max-w-7xl mx-auto rounded-b-2xl'>
                {/* banner text */}

                <div className='w-2/3 mx-auto pt-12 text-center'>
                    <h1 className='text-5xl font-bold text-white'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className='text-white mt-8'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className='mt-8 px-5 py-2 rounded-full bg-white font-semibold text-[#9538E2]' onClick={() => navigate('/dashboard')}>Shop Now</button>
                </div>
            </div>

          {/* banner img */}

                    <img className='w-[800px] h-[350px] mx-auto absolute top-80 left-[380px] rounded-xl' src={bannerImg} alt="banner-img" />
        </div>
    );
};

export default Banner;