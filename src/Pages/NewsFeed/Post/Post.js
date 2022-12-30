import React, { useContext, useEffect, useState } from 'react';
import Status from '../Status/Status';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from '../../../Routes/PrivateRoute/PrivateRoute';
import { AuthContext } from '../../../Context/Authprovider';
const Post = () => {
    const {user} = useContext(AuthContext)
   const[status, setStatus] = useState([]);
   const [reload, setReload] = useState(0);
    // console.log(status);
    const[info, setInfo] = useState([]);
    useEffect(()=>{
        fetch('https://social-website-server.vercel.app/post')
        .then(res => res.json())
        .then(data => setStatus(data))
    },[setStatus, reload]);

    useEffect(()=>{
        fetch(`https://social-website-server.vercel.app/user?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setInfo(data[0]))
    },[user?.email]); 

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        const img = form.img.value;
        // (message);

        const addPost = {
            message,
            img,

            }
            fetch('https://social-website-server.vercel.app/post',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(addPost)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                toast.success("Service Added Successfully!", {
                    position: toast.POSITION.TOP_CENTER
                  });
                // alert('Service Added Successfully!');
                form.reset();
            }
            // setStatus(addPost);
            setReload(reload+1);
        })
        .catch(err=>console.error(err));
        }

    return (
        <div>
            <div class="flex h-screen bg-primary justify-center items-start">

                <div class=" bg-primary p-2 pt-4 rounded  w-full">
                <div className=' shadow shadow-black-500/50 mb-10'>
                {
                    user?.uid ?
                    <>
                    <div class="flex ml-3">
                        <div class="mr-3">
                        <img  alt="" class="rounded-full w-14 h-14"/>
                        </div>
                        <div>
                        <h1 class="font-semibold">{user?.displayName}</h1>
                        <p class="text-xs text-gray-500">Write a Post...</p>
                        </div>
                        <div>
                        <div tabindex="0" class="dropdown">
                            <div tabindex="0" class="cursor-pointer">...</div>
                            <ul class="dropdown-content bg-white p-3 shadow rounded menu w-52">
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                                        <li><a href="#">Link 3</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div class="mt-3 p-3 w-full ">
                        <textarea  name="message" rows="3" class="border p-2 rounded w-full bg-accent" placeholder="What's on your mind?..."></textarea>
                        <div>
                            <input name="img" class="border p-2 rounded w-full bg-accent" type="text" placeholder='Add Image'/>
                        </div>
                    </div>
                    <div className='mx-3 pb-6'><button class="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Submit</button></div>
                    </form></>
                    :
                    <></>
                }
                    
                

               
                </div>
                <div>
                    {
                        status.map(oneStatus => <Status oneStatus={oneStatus}></Status>)
                    }
                </div>
                </div>
                
                </div>
               <ToastContainer></ToastContainer>
        </div>
    );
};

export default Post;