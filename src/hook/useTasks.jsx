// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


// const useTasks = () => {
//     const axiosSecure = useAxiosSecure();
//   const {isLoading,refetch,data: tasks=[] } = useQuery({
//         queryKey: ['tasks'],
//         queryFn: async () => {
//             const response = await axiosSecure.get('/alltasks')
//             console.log(response);
//             return response.data;
//         },
//     })
//  return tasks;
// };

// export default useTasks;


const useTasks = () => {
    const axiosSecure = useAxiosSecure();
    const { isLoading,refetch,data: tasks=[]} = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosSecure.get("/alltasks")
            return res.data;
        }
    })
    return [tasks,refetch];
};

export default useTasks;