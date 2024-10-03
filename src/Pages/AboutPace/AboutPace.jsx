import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutPace = () => {

    const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(0);
    const nextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % 3);
    };

    const handleBack = () => {
        navigate(-1);
    }


    return (
        <div className="bg-[url('/about_pace/about_pace.png')] bg-cover bg-center h-screen flex justify-center">


            <div className="flex flex-col space-y-10 mt-32">


                {/* back button, menubar */}
                <div className="flex flex-row justify-center space-x-20">

                    {/* back Button */}
                    <button
                        onClick={handleBack}
                    >
                        <img
                            className="w-2/3"
                            src="/about_pace/back.png"
                            alt="Back button" />
                    </button>

                    <h3 className="text-5xl text-white font-bold font-freckle">What is PACE Satellite?</h3>

                    {/* menu button  */}
                    <button>
                        <img
                            className="w-2/3"
                            src="/about_pace/menu-circle.png"
                            alt="menu button" />
                    </button>

                </div>



                {/* content */}
                <div className="relative pt-5 ">
                    <img
                        className="w-4/5 mx-auto"
                        src="/about_pace/banner.png"
                        alt="" />

                    <div className="absolute inset-0 flex items-center justify-center mx-40 lg:mx-48">
                        {currentPage === 0 && (
                            <h3 className="font-arima text-black">
                                PACE is like a super-smart space Satellite! 🌍✨<br />
                                PACE stands for <span className="font-semibold">
                                    Plankton, Aerosol, Cloud, ocean Ecosystem
                                </span>, and it went to space in 2024 to protect our planet’s oceans and air. But why should you care?
                            </h3>
                        )}
                        {currentPage === 1 && (
                            <div className="text-center">
                                <div>
                                    <p className="text-black">
                                        Think of the ocean as a home for all the fish and sea creatures. PACE helps scientists check if the ocean is clean and if tiny plants called <span className="text-green-600">plankton (which help animals breathe)</span> are healthy.
                                    </p>
                                </div>

                                <div className=" rounded-lg ">
                                    <img src="path-to-ocean-image.jpg" alt="Ocean Scene" className="w-full h-auto rounded-lg" />
                                </div>

                            </div>
                        )}
                        {currentPage === 2 && (
                            <div className="text-center">
                                <div className="bg-blue-200 rounded-lg p-4 mb-2">
                                    <img src="path-to-ocean-image.jpg" alt="Ocean Scene" className="w-full h-auto rounded-lg" />
                                </div>
                                <p className="text-white bg-black bg-opacity-50 p-4 rounded-lg">
                                    p3
                                </p>
                            </div>
                        )}
                    </div>
                    <button onClick={nextPage} className="absolute bottom-5 right-5">
                        <img src="path-to-next-button-image.jpg" alt="Next" className="w-10 h-10" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPace;