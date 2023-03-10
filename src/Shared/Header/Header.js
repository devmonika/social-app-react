import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
  
  
  
    const signOut = () =>{
      logOut()
      .then( ()=>{
        
      })
      .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-secondary">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-white hover:text-info">
                        <li><Link to="/">News Feed</Link></li>
                        
                        <li><Link to="/about">About </Link></li>
                        <li><Link to="/media">Media</Link></li>
                        <li><Link to="/message">Message</Link></li>
                        {
                            user?.uid ?
                            
                            <>
                                
                                <Link onClick={signOut}><li  className="btn bg-indigo-600">Logout</li></Link>
                            </> 
                            :
                            <>
                                <Link to="/login"> <li className="btn bg-indigo-600">LogIn</li></Link>
                            </>
                        
                        }
                        <li>
                            {/* <div className="drawer-content flex flex-col items-center justify-center"> */}

                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                            {/* </div> */}
                        </li>
                    </ul>
                     
                    </div>
                    <Link className="btn btn-ghost normal-case text-3xl font-bold text-indigo-600 font-serif">WriteBook</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  text-white">
                    <li><Link to="/">News Feed</Link></li>
                    
                    <li><Link to="/about">About </Link></li>
                    <li><Link to="/media">Media</Link></li>
                    <li><Link to="/message">Message</Link></li>
                        {
                            user?.uid ?
                            
                            <>
                                
                                <Link onClick={signOut}><li  className="btn bg-indigo-600">Logout</li></Link>
                            </> 
                            :
                            <>
                                <Link to="/login"> <li className="btn bg-indigo-600">LogIn</li></Link>
                            </>
                        
                        }
                    
                    </ul>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Header;