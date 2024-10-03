import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Role from '../Pages/Role/Role';
import StudentLogin from '../Pages/StudentLogin/StudentLogin';
import AboutPace from '../Pages/AboutPace/AboutPace';
import AboutPace2 from '../Pages/AboutPace/AboutPace2';
import PaceArView from '../Pages/PaceArView/PaceArView';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/role",
                element: <Role></Role>
            },
            {
                path: "/studentLogin",
                element: <StudentLogin></StudentLogin>
            },
            {
                path: "/aboutPace",
                element: <AboutPace></AboutPace>
            },
            {
                path: "/aboutPace2",
                element: <AboutPace2></AboutPace2>
            },
            {
                path: "/paceArView",
                element: <PaceArView></PaceArView>
            }

        ]
    }
])
