import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutPace = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }


    const [currentPage, setCurrentPage] = useState(0);
    const nextPage = () => {
        if (currentPage === 2) {
            navigate('/aboutPace2');
        }
        else {
            setCurrentPage((prevPage) => (prevPage + 1) % 3);
        }
    };

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


                        {/* 1st page */}
                        {currentPage === 0 && (
                            <h3 className="font-arima text-black text-xl font-semibold">
                                PACE is like a super-smart space Satellite! 🌍✨<br />
                                PACE stands for <span className="font-semibold">
                                    Plankton, Aerosol, Cloud, ocean Ecosystem
                                </span>, and it went to space in 2024 to protect our planet’s oceans and air. But why should you care?
                            </h3>
                        )}

                        {/* 2nd page */}
                        {currentPage === 1 && (
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <p className="text-black text-xl font-arima mt-10 font-semibold">
                                        Think of the ocean as a home for all the fish and sea creatures. PACE helps scientists check if the ocean is clean and if tiny plants called <span className="text-green-600">plankton (which help animals breathe)</span> are healthy.
                                    </p>
                                </div>

                                <div className=" my-auto rounded-lg ">
                                    <img src="/about_pace/page2.png " alt="Ocean Scene" className="w-full h-auto rounded-lg" />
                                </div>

                            </div>

                        )}


                        {/* 3rd page */}
                        {currentPage === 2 && (
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <p className="text-black text-sm lg:text-xl font-arima mt-10 font-semibold">
                                        Now, let’s think about the air we breathe. Sometimes, there are tiny things floating in the air like dust or smoke, called <span className="text-blue-500">aerosols</span>. These can change the weather, and some of them can make it harder for us to breathe. PACE watches over these tiny particles, helping us figure out if our air is clean.
                                    </p>
                                </div>


                                <div className="my-auto rounded-lg">
                                    <img src="/about_pace/page3.png" alt="Ocean Scene" className="w-full h-auto rounded-lg" />
                                </div>


                            </div>

                        )}
                        <button onClick={nextPage} className="absolute bottom-10 lg:bottom-14 right-10">
                            <img src="/about_pace/forward-circle.png" alt="Next" className="w-10 h-10" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPace;