import { useNavigate } from "react-router-dom";

const AboutPace2 = () => {


    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    const handleNext = () =>{
        navigate('/paceArView');
    }

    return (
        <div className="bg-[url('/about_pace/about_pace.png')] bg-cover bg-center h-screen flex justify-center">


            <div className="flex flex-col space-y-10 mt-32">


                {/* back button, menubar */}
                <div className="flex flex-row justify-center space-x-10">

                    {/* back Button */}
                    <button
                        onClick={handleBack}
                    >
                        <img
                            className="w-2/3"
                            src="/about_pace/back.png"
                            alt="Back button" />
                    </button>

                    <h3 className=" text-3xl lg:text-5xl text-white font-bold font-freckle">Why Should You Care About PACE?</h3>

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

                    <div className="absolute inset-0 flex items-center justify-center mx-40 lg:mx-52">
                        <h3 className="font-arima text-black text-xl font-semibold mt-10">
                            You are the future! 🌟 And one day, it will be up to your generation to take care of our planet. By learning about things like the PACE satellite, you’ll understand how the Earth’s oceans, air, and clouds are connected. If we know how to keep the oceans clean and the air fresh, we can make sure the Earth stays beautiful and healthy. Lets Dive in -
                        </h3>

                    </div>

                    <button
                    onClick={handleNext} 
                    className="absolute bottom-10 lg:bottom-20 right-40 lg:right-60">
                        <img src="/about_pace/forward-circle.png" alt="Next" className="w-10 h-10" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPace2;