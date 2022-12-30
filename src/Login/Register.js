import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';

const Register = () => {
    const {creatUser, userProfile} = useContext(AuthContext);
    // const[createUserEmail, setCreateUserEmail] = useState('');
    const navigate = useNavigate();
    const  location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;
        const clg = form.clg.value;
        const password = form.password.value;
        console.log(name, email, password);


        creatUser(email, password, address, clg)
        .then(result =>{
            const user = result.user;
            // toast.success("User Created !", {
            //     position: toast.POSITION.TOP_CENTER
            //   });
            console.log(user);
            const userInfo ={
                displayName:name
            }
            userProfile(userInfo)
            .then(() => {
                saveUser(name, email, clg, address);

            })
            .catch(error => console.error(error))
            // form.reset();
            form.reset();
            navigate(from,{replace:true})
        })
        .catch(error => console.error(error))
    }

        const saveUser = (name, email, clg, address, img) =>{
        const user = {name, email, clg, address, img};
        console.log(user)

        fetch('https://social-website-server.vercel.app/users',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data=>{
            // setCreateUserEmail(email);
           
        })
        // .catch(err=>console.error(err));
    }
    return (
        <div>
            <div class="min-h-screen md:grid md:grid-cols-2 lg:grid-cols-3">
                <div class="hidden md:block h-48 lg:col-span-2 min-h-screen relative overflow-hidden bg-gray-400 shadow-2xl">
                    <img class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="img"/>
                    {/* <div class="absolute inline-block p-4 min-w-full text-white text-5xl lg:text-7xl mt-60 ml-20 bg-gray-600 bg-opacity-50">
                    <h1>Connect People Together</h1>
                    </div> */}
                </div>

                <div class="flex items-center justify-center p-6 min-h-screen w-full">
                    <div class="w-full">
                    <div class="sm:mx-auto sm:w-full sm:max-w-md">

                        <h2 class="mt-6 text-2xl font-extrabold text-center leading-9">Sign Up to your account</h2>

                        <p class="mt-2 text-sm text-center leading-5 max-w">
                        Or
                        <a href="#" class="font-medium transition ease-in-out duration-150"> Already have an account?<Link to="/login"><span className='text-xl text-bold text-indigo-600'>Login</span></Link> </a>
                        </p>
                    </div>

                    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <form onSubmit={handleRegister}>
                        <div>
                            <label for="name" class="block text-sm font-medium leading-5"> Full Name </label>

                            <div class="mt-1 rounded-md shadow-sm">
                            <input id="name" name="name" type="text" required autofocus class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>
                        <div class="mt-6">
                            <label for="email" class="block text-sm font-medium leading-5"> Email address </label>

                            <div class="mt-1 rounded-md shadow-sm">
                            <input  name="email" type="email" required autofocus class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>
                        
                        <div class="mt-6">
                            <label for="address" class="block text-sm font-medium leading-5"> Address </label>

                            <div class="mt-1 rounded-md shadow-sm">
                            <input  name="address" type="text" required autofocus class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>
                        <div class="mt-6">
                            <label for="clg" class="block text-sm font-medium leading-5"> university </label>

                            <div class="mt-1 rounded-md shadow-sm">
                            <input  name="clg" type="text" required autofocus class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>
                        
                        <div class="mt-6">
                            <label for="password" class="block text-sm font-medium text-gray-700 leading-5"> Password </label>

                            <div class="mt-1 rounded-md shadow-sm">
                            <input id="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>

                        

                        <div class="mt-6">
                            <span class="block w-full rounded-md shadow-sm">
                            <button type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none transition duration-150 ease-in-out">Sign Up</button>
                           
                            </span>
                        </div>
                        </form>
                       
                    </div>
                    </div>
                </div>
                </div>

        </div>
    );
};

export default Register;