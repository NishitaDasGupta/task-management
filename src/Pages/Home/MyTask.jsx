import { MdDelete } from 'react-icons/md';
import { Link, useNavigate } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle";
import useTasks from "../../hook/useTasks";
import welcome from "../../assets/Welcome.gif"
import { AiFillEdit } from 'react-icons/ai';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Swal from 'sweetalert2';


const MyTask = () => {
    const [tasks, refetch] = useTasks();
    const axiosSecure = useAxiosSecure();
    const pendingTask = tasks.filter(task => task.status === "Pending");
    const navigate = useNavigate();
    const handleUpdate = (task) => {
        const taskdata = { status: "Completed" }
        axiosSecure.put(`/updatetask/${task._id}`, taskdata)
            .then(data => {
              
                if (data.data.modifiedCount >= 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Done!!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate("/comppletedtask")
                }
            })
            .catch(error => console.log(error))

    }

    const handleDelete = (task) => {
        axiosSecure.delete(`/deletetask/${task._id}`)
            .then(data => {
                if (data.data.deletedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Deleted!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch();
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>

            {
                pendingTask.length === 0 ?
                    <div>
                        <img className='w-1/2 mx-auto' src={welcome} alt="" />

                        <p className='text-[#128290] text-center font-bold'>Please add your task! </p>
                    </div>

                    :
                    <div>
                        <SectionTitle subHeading="List of" heading="My Tasks"></SectionTitle>


                        <div className="overflow-x-auto mx-10 shadow-xl">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Title</th>
                                        <th>Status</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        pendingTask.map((task, index) =>
                                            <tr key={task._id}>

                                                <td>{index + 1}</td>
                                                <td>
                                                    <h1 className="text-xl font-bold">{task.title}</h1>
                                                    <p className="text-gray-500">{task.details}</p>
                                                </td>
                                                <td >
                                                    <button onClick={() => { handleUpdate(task) }} className='btn'>  {task.status}</button>
                                                </td>
                                                <td> <div className='flex justify-center items-center'>
                                                    <Link to={`/updatetask/${task._id}`}>
                                                        <p className='text-xl py-3 px-3'>
                                                            <AiFillEdit />
                                                        </p>
                                                    </Link>


                                                    <button onClick={() => { handleDelete(task) }} className="btn btn-ghost btn-xs text-2xl" title="Delete"><MdDelete /></button>
                                                </div>
                                                </td>
                                           

                                            </tr>)
                                    }

                                </tbody>


                            </table>
                        </div>
                    </div>

            }
        </div>
    );
};

export default MyTask;