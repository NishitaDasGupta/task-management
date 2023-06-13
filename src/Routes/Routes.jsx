import { createBrowserRouter, } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MyTask from "../Pages/Home/MyTask";
import CompletedTask from "../Pages/Home/CompletedTask";
import NewTask from "../Pages/Home/NewTask";
import UpdateTask from "../Pages/Home/UpdateTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
        
            {
                path: "/",
                element: <MyTask></MyTask>

            },
            {
                path: "/newtask",
                element: <NewTask></NewTask>

            },
            {
                path: "updatetask/:id",
                element: <UpdateTask></UpdateTask>,
                loader: ({ params }) => fetch(`https://task-server-ecru.vercel.app/findmyonetask/${params.id}`)
            },
            {
                path: "/comppletedtask",
                element: <CompletedTask></CompletedTask>
            }
        ]
    },
]);
export default router;