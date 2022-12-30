import React from 'react';

const AboutModal = ({info, handleUpdate, setUpdateInfo, updateInfoLoading}) => {
    return (
        <div>
            {/* The button to open modal */}
                

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                <form onSubmit={handleUpdate}>
                        <div>
                            <label for="name" class="block text-sm font-medium leading-5"> Full Name </label>

                            <div class="mt-1 rounded-md shadow-sm">
                            <input id="name" name="name" onChange={info.name} type="text" required autofocus class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>
                        <div class="mt-6">
                            <label for="email" class="block text-sm font-medium leading-5"> Email address </label>

                            <div class="mt-1 rounded-md shadow-sm">
                            <input readOnly name="email" value={info.email} type="email" required autofocus class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>
                        
                        <div class="mt-6">
                            <label for="address" class="block text-sm font-medium leading-5"> Address </label>

                            <div class="mt-1 rounded-md shadow-sm">
                            <input  name="address" onChange={info.address} type="text" required autofocus class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>
                        <div class="mt-6">
                            <label for="clg" class="block text-sm font-medium leading-5"> university </label>

                            <div class="mt-1 rounded-md shadow-sm">
                            <input  name="clg" onChange={info.clg} type="text" required autofocus class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>
                        

                        

                        <div class="mt-6">
                            <span class="block w-full rounded-md shadow-sm">
                            <button type="submit" class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-600 focus:outline-none transition duration-150 ease-in-out">Update</button>
                           
                            </span>
                        </div>
                        </form>
                </label>
                </label>
        </div>
    );
};

export default AboutModal;