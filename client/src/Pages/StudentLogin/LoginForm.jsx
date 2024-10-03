import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
//import { useHistory } from 'react-router-dom';


const LoginForm = () => {

    const { register, watch } = useForm();
    const navigate = useNavigate();

    const gradeLevel = watch('gradeLevel'); // Watch the value of gradeLevel

    // Effect to handle navigation when gradeLevel is selected
    useEffect(() => {
        if (gradeLevel) {
            // Navigate to the next page when a grade level is selected
            navigate('/aboutPace'); // Change '/next-page' to your desired route
        }
    }, [gradeLevel, navigate]); // Dependency array to watch for changes


    return (
        <div>
            <form className="bg-[#EFE6D6] w-80">
                {/* Name Input */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-xl font-arima font-bold mb-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: true })} // Register input
                        className="border border-black rounded-xl p-2 w-full"
                        placeholder="Name"
                    />
                </div>

                {/* Institution Input */}
                <div className="mb-4">
                    <label htmlFor="institution" className="block text-xl font-arima font-bold mb-1">
                        Institution:
                    </label>
                    <input
                        type="text"
                        id="institution"
                        {...register('institution', { required: true })} // Register input
                        className="border border-black rounded-xl p-2 w-full"
                        placeholder="Institution"
                    />
                </div>

                {/* Grade Level Dropdown */}
                <div className="mb-4">
                    <label htmlFor="gradeLevel" className="block text-xl font-arima font-bold mb-1">
                        Grade Level:
                    </label>
                    <select
                        id="gradeLevel"
                        {...register('gradeLevel', { required: true })} // Register dropdown
                        className="border border-black rounded-xl p-2 w-full"
                    >
                        <option value="">Choose your grade level</option>
                        <option value="1" className="bg-[#EFE6D6] text-black font-arima text-lg font-semibold">Elementary School (Grades 3-5)</option>
                        <option value="2" className="bg-[#EFE6D6] text-black font-arima text-lg font-semibold">Middle School (Grades 6-8)</option>
                        <option value="3" className="bg-[#EFE6D6] text-black font-arima text-lg font-semibold">High School (Grades 9-12)</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;