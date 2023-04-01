import React from 'react';
import {BsPlayCircle} from 'react-icons/bs'
import heroImg from '../img/Saly-19.svg'

const Hero = () => {
    return (
        <hero id="container ">
                <div className="container flex items-center" >
                    <div className="pl-5">
                        <h1 className="container py-10 pl-1.5 w-11 font-bold  text-indigo-500 text-5xl">Virtual Reality <br/> Business Solutions</h1>
                        <p className="container text-1xl text-indigo-100">We have over 15 year exprience in business consultting arena. We have over <br/> 15 year exprience in business consultting arena and artficial intelligence.
                        </p>
                        <div className="flex items-center container py-3">
                            <button type="button"
                                    className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Join Us
                            </button>
                            <h1 className="text-indigo-100"><BsPlayCircle/></h1>
                            <p className="text-indigo-100 pl-1">Watch video</p>
                        </div>
                    </div>
                    <div><img src={heroImg} alt=""/></div>
                </div>
        </hero>
    );
};

export default Hero;