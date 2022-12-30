import React from 'react';
import NewsFeed from '../NewsFeed/NewsFeed';
import Sidebar from '../Sidebar/Sidebar';
import Heroarea from './Heroarea';

const Home = () => {
    return (
        <div className='flex'>
            {/* <Heroarea></Heroarea> */}
            <Sidebar></Sidebar>
            <NewsFeed></NewsFeed>
        </div>
    );
};

export default Home;