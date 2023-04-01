import React from 'react';
import img2 from "../img/Rectangle 56.svg"
import img3 from "../img/icons.svg"

const Meet = () => {
    return (
        <section>
            <div className="container py-12">
                <h1 className="text-white text-2xl text-center font-semibold">Met Our Team</h1>
                <p className=" text-white text-center py-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis <br/>
                    accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                </p>

                <div className=" flex grid grid-cols-4">
                    <div className="flex m-8 flex-col text-center items-center bg-gray-800 rounded-3xl py-12 px-3 border border-gray bg-opacity-40">
                        <img src={img2} alt=""/>
                        <h2 className="text-white">Sunny Khan</h2>
                        <p className="text-white ">Executive officer</p>
                        <img src={img3} alt=""/>
                    </div>
                    <div className="flex m-8 flex-col text-center items-center bg-gray-800 rounded-3xl py-12 px-3 border border-gray bg-opacity-40">
                        <img src={img2} alt=""/>
                        <h2 className="text-white">Sunny Khan</h2>
                        <p className="text-white ">Executive officer</p>
                        <img src={img3} alt=""/>
                    </div>
                    <div className="flex m-8 flex-col text-center items-center bg-gray-800 rounded-3xl py-12 px-3 border border-gray bg-opacity-40">
                        <img src={img2} alt=""/>
                        <h2 className="text-white">Sunny Khan</h2>
                        <p className="text-white ">Executive officer</p>
                        <img src={img3} alt=""/>
                    </div>
                    <div className="flex m-8 flex-col text-center items-center bg-gray-800 rounded-3xl py-12 px-3 border border-gray bg-opacity-40">
                        <img src={img2} alt=""/>
                        <h2 className="text-white">Sunny Khan</h2>
                        <p className="text-white ">Executive officer</p>
                        <img src={img3} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Meet;