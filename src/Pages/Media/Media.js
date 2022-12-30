import React, { useEffect, useState } from 'react';
import MediaPost from './MediaPost';

const Media = () => {
    const[status, setStatus] = useState([]);
    
    useEffect(()=>{
        fetch('https://social-website-server.vercel.app/post')
        .then(res => res.json())
        .then(data => setStatus(data))
    },[]);

    return (
        
        <div role="article" tabindex="0" class="focus:outline-none container mx-auto py-8 px-4">
            <h1 tabindex="0"  class="focus:outline-none text-5xl text-center f-m-w text-indigo-700 dark:text-indigo-400 font-bold pt-0">Posts</h1>
            <div class="pt-14 xl:px-0 px-4">
                <div class="w-full lg:flex">
                <div class="lg:w-full lg:ml-8">
                    {
                        status.map(oneStatus => <MediaPost oneStatus={oneStatus}></MediaPost>)
                    }
                    </div>
                </div>
            </div>
           
        </div>   
    
    );
};

export default Media;