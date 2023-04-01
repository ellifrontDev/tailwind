import React from 'react';

const Get = () => {
    return (
        <section>
            <div className="container">

                <div className="flex  flex-col text-center items-center bg-gray-800 rounded-3xl py-12 px-3 bg-opacity-40">
                    <h1 className="text-white text-2xl text-center">Subscribe to get the Latest News</h1>
                    <p className="text-white text-center pb-10">We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</p>


                    <form>
                        <label htmlFor="default-search"
                               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            </div>
                            <input type="search" id="default-search"
                                   className="block w-[110%] p-4 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
                                   focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Enter your email address" required/>
                                <button
                                        className="text-white absolute ml-7 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Subscribe
                                </button>
                        </div>
                    </form>


                </div>





            </div>
        </section>
    );
};

export default Get;