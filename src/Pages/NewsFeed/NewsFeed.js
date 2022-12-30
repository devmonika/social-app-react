import React from 'react';
import Post from './Post/Post';
import Profile from './Profile/Profile';

const NewsFeed = () => {
    return (
        <div className='w-full lg:flex sm:block'>
            <div className='w-9/12 overflow-y-auto '>
                <Post></Post>
                
            </div>
            <div className='w-3/12'>
                <Profile></Profile>
            </div>
        </div>
    );
};

export default NewsFeed;