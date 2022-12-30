import React from 'react';

const MediaPost = ({oneStatus}) => {
    const {img, message} = oneStatus
    return (
        
            <div class="lg:flex items-start mb-8">
                <img className='w-80' tabindex="0" role="img" aria-label="bag on a table"  alt="bag on table" src={img} class="focus:outline-none w-full" />
                <div class="lg:ml-6">
                    <h3 tabindex="0" class="focus:outline-none text-gray-300 f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">{message}</h3>
                    
                </div>
            </div>
            
       
    );
};

export default MediaPost;