import React from 'react';
import comp from "../img/man-working.svg";

const Project = () => {
    return (
        <section>
            <section>
                <div className="container flex  items-center">

                    <div>
                        <h1 className="text-white text-2xl">We complete every projects <br/>
                            extra care as customer need</h1>
                        <p className="text-white py-3.5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, <br/>
                            non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque <br/>
                            in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus <br/>
                            reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus <br/> laboriosam qui nam.
                        </p>
                        <button type="button"
                                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Read more
                        </button>

                    </div>
                    <img src={comp} alt=""/>
                </div>
            </section>
        </section>
    );
};

export default Project;