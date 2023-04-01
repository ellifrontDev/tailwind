import React from 'react';
import img1 from '../img/Icon.svg'
import {BsArrowRight} from "react-icons/bs"

const OurPage = () => {
    return (
        <section>
            <div className="container">
                <div>
                    <h1 className="container font-bold text-center text-5xl text-indigo-100 pb-3.5">Our Service </h1>
                    <p className="container font-bold text-center text-1xl text-indigo-50 pb-3.5">We turn information
                        into actionable insights We work to understand your issues <br/>
                        and are driven to ask better questions in the pursuit of making work.</p>
                    <div className="flex grid grid-cols-3">
                        <div className="flex m-4 flex-col text-center items-center bg-gray-800 rounded-3xl py-12 px-8 border border-gray bg-opacity-40">
                            <img src={img1} alt=""/>
                            <h2 className="text-white text-2xl">Order Management</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>

                            <div className="flex items-center text-white pt-9">
                                <p >Learn more </p>
                                <span className="pl-3"><BsArrowRight/></span>
                            </div>

                        </div>
                        <div className="flex m-4 flex-col text-center items-center bg-gray-800 rounded-3xl py-12 px-8 border border-gray bg-opacity-40">
                            <img src={img1} alt=""/>
                            <h2 className="text-white text-2xl">Order Management</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>

                            <div className="flex items-center text-white pt-9">
                                <p >Learn more </p>
                                <span className="pl-3"><BsArrowRight/></span>
                            </div>
                        </div>
                        <div className="flex m-4 flex-col text-center items-center bg-gray-800 rounded-3xl py-12 px-8 border border-gray bg-opacity-40">
                            <img src={img1} alt=""/>
                            <h2 className="text-white text-2xl">Order Management</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>

                            <div className="flex items-center text-white pt-9">
                                <p >Learn more </p>
                                <span className="pl-3"><BsArrowRight/></span>
                            </div>
                        </div>
                        <div className="flex flex-col m-4 text-center items-center bg-gray-800 rounded-3xl py-12 px-8 border border-gray bg-opacity-40">
                            <img src={img1} alt=""/>
                            <h2 className="text-white text-2xl">Order Management</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>

                            <div className="flex items-center text-white pt-9">
                                <p >Learn more </p>
                                <span className="pl-3"><BsArrowRight/></span>
                            </div>
                        </div>
                        <div className="flex m-4 flex-col text-center items-center bg-gray-800 rounded-3xl py-12 px-8 border border-gray bg-opacity-40">
                            <img src={img1} alt=""/>
                            <h2 className="text-white text-2xl">Order Management</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>

                            <div className="flex items-center text-white pt-9">
                                <p >Learn more </p>
                                <span className="pl-3"><BsArrowRight/></span>
                            </div>
                        </div>
                        <div className="flex m-4 flex-col text-center items-center bg-gray-800 rounded-3xl py-12 px-8 border border-gray bg-opacity-40">
                            <img src={img1} alt=""/>
                            <h2 className="text-white text-2xl">Order Management</h2>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>

                            <div className="flex items-center text-white pt-9">
                                <p >Learn more </p>
                                <span className="pl-3"><BsArrowRight/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default OurPage;