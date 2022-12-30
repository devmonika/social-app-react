import React from 'react';
import Comment from './Comment/Comment';

const Status = ({oneStatus}) => {
    // console.log(status)

    
    const{message, img} = oneStatus;
    return (
        <div>
            <div className="card w-full bg-primary shadow shadow-black-500/50 text-accent mb-8">
            <div className="card-body">
                <h2 className="card-title text-gray-200">{message}</h2>
                {/* <p></p> */}
            </div>
            <figure>
                <img className='w-full' src={img} alt="Shoes" />
            </figure>
            <Comment></Comment>
            </div>
        </div>
    );
};

export default Status;