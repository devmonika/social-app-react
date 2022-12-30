import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider';
import AboutModal from './AboutModal';

const About = () => {
    const {user} = useContext(AuthContext);
  
    const[info, setInfo] = useState([]);
    console.log(info);
    const{ address, name, clg, email, img
    } = info;
    const [reload, setReload] = useState(0);
    const[updateInfo, setUpdateInfo] = useState("");
    const [updateInfoLoading, setUpdateInfoLoading] = useState(false);

     useEffect(()=>{
        fetch(`https://social-website-server.vercel.app/user?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setInfo(data[0]))
    },[user?.email, reload]); 
    

    const handleUpdate = (user) =>{
      console.log(user);
      setUpdateInfoLoading(true);
        fetch(`https://social-website-server.vercel.app/user/${user?.id}`,{
          
        method:'PATCH',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({user:updateInfo})
        })
        
        .then(res=>res.json())
        .then(data => {
          console.log(data);
          setUpdateInfoLoading(false);
          if(data.modifiedCount > 0){
            const element = document.getElementById('my-modal');
            element.checked = false;
            // toast.success("Updated Successfully!", {
            //   position: toast.POSITION.TOP_CENTER
            // });
            
            setReload(reload+1);       
          }
        })

        
    }
    
    
    return (
        <div>
          <main class="">

            <div class="lg:w-8/12 lg:mx-auto mb-8">

              <header class="flex flex-wrap items-center p-4 md:py-8">

                <div class="md:w-3/12 md:ml-16">
                  
                  <img class="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                              border-2 border-indigo-600 p-1" src={img} alt="profile"/>
                </div>

                
                <div class="w-8/12 md:w-7/12 ml-4">
                  <div class="md:flex md:flex-wrap md:items-center mb-4">
                    <h2 class="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                    {user?.displayName}
                    </h2>

                    
                    <span class="inline-block fas fa-certificate fa-lg text-blue-500 
                                        relative mr-6 text-xl transform -translate-y-2" aria-hidden="true">
                      <i class="fas fa-check text-white text-xs absolute inset-x-0
                                        ml-1 mt-px"></i>
                    </span>

                    
                    {/* <a href="#" class="bg-indigo-600 px-2 py-1 
                                  text-white font-semibold text-sm rounded block text-center 
                                  sm:inline-block block"></a> */}
                    <label htmlFor="my-modal-4" className="btn bg-indigo-600">Edit</label>
                    <AboutModal info={info} handleUpdate={handleUpdate}  updateReviewLoading={updateInfoLoading} setUpdateReview={setUpdateInfo}></AboutModal>
                  </div>

                  
                

                  
                  <div class="hidden md:block">
                  <span class="font-semibold text-xl">{name}</span>
                    <h1 class="font-semibold text-xl">{email}</h1>
                    
                    <p class="font-semibold text-xl">{clg}</p>
                    <p class="font-semibold text-xl">{address}</p>
                  </div>

                </div>

                
                <div class="md:hidden text-sm my-2">
                <span class="font-semibold text-xl">{name}</span>
                <h1 class="font-semibold text-xl">{email}</h1>
                    
                    <p class="font-semibold text-xl">{clg}</p>
                    <p class="font-semibold text-xl">{address}</p>
                </div>

              </header>

              
              
            </div>
          </main>
        </div>
    );
};

export default About;