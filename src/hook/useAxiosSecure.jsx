import axios from "axios";

const useAxiosSecure = () => {
 
    const axiosSecure = axios.create({
        baseURL: 'https://task-server-ecru.vercel.app', 
      });

  return axiosSecure;
};

export default useAxiosSecure;