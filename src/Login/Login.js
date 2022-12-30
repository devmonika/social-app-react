import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';

const Login = () => {
    const{providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const[error, setError] = useState('');

    const{logIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const  location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleLogIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
          const user =result.user;
          console.log(user);
          navigate(from,{replace:true})
        })
        .catch(error => console.error(error))
      }

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace:true});
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
        })
    }
    return (
        <div>
            <div class="min-h-screen md:grid md:grid-cols-2 lg:grid-cols-3">
                <div class="hidden md:block h-48 lg:col-span-2 min-h-screen relative overflow-hidden bg-gray-400 shadow-2xl">
                    <img class="absolute inset-0 h-full w-full object-cover" src="https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                    {/* <div class="absolute inline-block p-4 min-w-full text-white text-5xl lg:text-7xl mt-60 ml-20 bg-gray-600 bg-opacity-50">
                    <h1>Connect People Together</h1>
                    </div> */}
                </div>

                <div class="flex items-center justify-center p-6 min-h-screen w-full">
                    <div class="w-full">
                    <div class="sm:mx-auto sm:w-full sm:max-w-md">

                        <h2 class="mt-6 text-2xl font-extrabold text-center leading-9">Sign in to your account</h2>

                        <p class="mt-2 text-sm text-center leading-5 max-w">
                        Or
                        <a href="#" class="font-medium transition ease-in-out duration-150"> create a <Link to="/register"><span className='text-xl text-bold text-indigo-600'>new account</span></Link> </a>
                        </p>
                    </div>

                    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <form onSubmit={handleLogin}>
                        <div>
                            <label for="email" class="block text-sm font-medium leading-5"> Email address </label>

                            <div class="mt-1 rounded-md shadow-sm">
                            <input id="email" name="email" type="email" required autofocus class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
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
                            <button type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none transition duration-150 ease-in-out">Sign in</button>
                           
                            </span>
                        </div>
                        </form>
                        <button onClick={googleLogIn} class="flex justify-center w-full mt-3 px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-600 focus:outline-none transition duration-150 ease-in-out">Google Login</button>
                    </div>
                    </div>
                </div>
                </div>

        </div>
    );
};

export default Login;