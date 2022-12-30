import React from 'react';

const Comment = () => {
    const handleSubmit= event =>{
        event.preventDefault();

   }
    return (
        <div>
            <p>Write a comment here...</p>
            <form onSubmit={handleSubmit}>
                <textarea name="comment" class="border p-2 rounded w-full bg-accent"></textarea>
                <button class="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700 m-2">Submit</button>
            </form>
        </div>
    );
};

export default Comment;