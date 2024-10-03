import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleStart = () =>{
        navigate('/role');
    }
    return (
        <div className="bg-[url('/home.png')] bg-cover bg-center min-h-screen flex flex-col justify-end items-center md:bg-cover sm:bg-cover">
                <button
                onClick={handleStart} 
                className="text-center py-10">
                  <img className="w-1/2 mx-auto" src="/startNow.png" alt="start button" />
                </button>
        </div>
    );
};

export default Home;