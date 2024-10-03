import { useNavigate } from "react-router-dom";

const PaceArView = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className="bg-[url('/about_pace/about_pace.png')] bg-cover bg-center h-screen flex flex-row justify-center">


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

                    <h3 className=" text-3xl lg:text-5xl text-white font-bold font-freckle">Watch AR View of PACE Satellite</h3>

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
                        className="w-5/6 mx-auto"
                        src="/about_pace/banner.png"
                        alt="" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center mx-40 lg:mx-52 mt-10">


                        <img className="w-3/4" src="/pace.png" alt="" />


                        <div className=" flex justify-center mx-30  my-3">
                            <button>
                                <img className="w-1/2 mx-auto" src="/explorePaceData.png" alt="" />
                            </button>
                            <button>
                                <img className="w-1/2 mx-auto" src="/learnPaceData.png" alt="learnPaceData" />
                            </button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default PaceArView;