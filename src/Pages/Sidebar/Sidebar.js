import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  
                <div className="drawer-side  shadow-lg shadow-white">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80  bg-primary text-info">

                    <li><a>Saved</a></li>
                    <li><a>Memories</a></li>
                    <li><a>Videos</a></li>
                    <li><a>Groups</a></li>
                    <li><a>Pages</a></li>
                    <li><a>Games</a></li>
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default Sidebar;