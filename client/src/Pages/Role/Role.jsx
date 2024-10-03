import { Link } from "react-router-dom";

const Role = () => {
    return (
        <div className="bg-[url('/Role/Role_BG.png')] bg-cover bg-center h-screen flex flex-col items-center justify-center">
            <h1 className="text-white text-5xl font-semibold mb-8 font-freckle ">Choose Your Role</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-10">
                {/* Teacher Role */}
                <div>
                    <button className="bg-[#EFE6D6] rounded-lg shadow-lg p-6 w-68 md:h-96">
                        <div className="bg-[url('/Role/Robot.png')] bg-center bg-contain bg-no-repeat relative w-64 h-64 flex justify-center">
                            {/* Teacher Image */}
                            <img src="/Role/Teacher.png" alt="Teacher" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 mb-7 " />
                        </div>
                        <h3 className=" font-bold font-arima text-2xl mt-5 text-[#5A8E93]">
                            Log in as Teacher
                        </h3>
                    </button>
                </div>

                {/* Student Role */}
                <Link to='/studentLogin'>
                    <div>
                        <button className="bg-[#EFE6D6] rounded-lg shadow-lg p-6 w-68 md:h-96 mx-auto">
                            <div className="bg-[url('/Role/Robot.png')] bg-center bg-contain bg-no-repeat relative w-64 h-64 mx-auto">
                                {/* Teacher Image */}
                                <img src="/Role/School_girl.png" alt="Teacher" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 mb-7 " />
                            </div>
                            <h3 className=" font-bold font-arima text-2xl mt-5 text-[#5A8E93] outline-4">
                                Log in as Student
                            </h3>
                        </button>
                    </div>
                </Link>


            </div>
        </div>
    );
};

export default Role;