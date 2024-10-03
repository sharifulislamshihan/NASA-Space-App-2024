import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const StudentLogin = () => {


    const navigate = useNavigate()

    const handleBack = () =>{
        navigate(-1);
    }
    return (
        <div className="bg-[url('/Role/Role_BG.png')] bg-cover bg-center h-screen flex flex-col items-center justify-center">



            {/* back button */}
            <button
            onClick={handleBack} 
            className="self-start ml-20 md:ml-24 my-10">
                <img
                    className="w-2/3"
                    src="/student_login/back.png"
                    alt="Back_button" />
            </button>




            <div className="bg-[#EFE6D6] w-5/6 md:h-3/5 rounded-3xl grid grid-cols-2 gap-5">

                    {/* image */}
                    <div className="flex justify-center items-center">
                        <img
                            className="w-60"
                            src="/student_login/School_girl.png"
                            alt="school_girl" />
                    </div>

                    {/* form */}
                    <div className="flex items-center">
                        <LoginForm></LoginForm>
                    </div>
                </div>
            </div>
    );
};

export default StudentLogin;