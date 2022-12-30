import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider';

const Profile = () => {
    const{user} = useContext(AuthContext);
    const[info, setInfo] = useState([]);
    useEffect(()=>{
        fetch(`https://social-website-server.vercel.app/user?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setInfo(data[0]))
    },[user?.email]); 
    return (
        <div>
         
            <div class="bg-grey-lighter mt-4">
                <div class="container mx-auto">
                <div class="flex">
                    <div class="">
                    <div class="shadow">
                        <div class="px-12 py-6 pb-0">
                
                        <img class="h-32 w-32 rounded-full border-4 border-white mr-2" alt=""/>
                        <div class="text-center text-white text-xl mb-2"></div>
                        
                      
                       
                        </div>
                        <Link href="/about" class="text-center text-white block font-semibold uppercase hover:bg-green hover:text-white no-underline text-grey-darkest pb-4">
                        View Profile
                        </Link>
                    </div>
                    </div>
                    
                </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;