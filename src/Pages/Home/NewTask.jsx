import SectionTitle from "../../Shared/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const NewTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const onSubmit = taskdata => {

        axiosSecure.post('/addtask', taskdata)
            .then(data => {
                data?.data?.insertedId &&
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Task Added!',
                        showConfirmButton: false,
                        timer: 1000
                    });
                navigate('/');

            })
            .catch(error => console.log(error));


    };

    return (
        <div>

            <SectionTitle subHeading="Please Add" heading="New Task"></SectionTitle>

            <div className='p-14 bg-[#F3F3F3] mx-14 mb-14'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Title of Task*</span>
                        </label>
                        <input type="text" placeholder="Title of Task" className="input input-bordered w-full " {...register("title", { required: true, maxLength: 80 })} />
                    </div>
                    <div className="mx-4 my-2 text-red-500">
                        {errors.title && <span> Title is required</span>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-bold">Status*</span>
                        </label>
                        <select className="select select-bordered" {...register("status", { required: true })}>
                            <option disabled selected>Pending</option>
                            <option>Completed</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Task Details" {...register("details", { required: true, maxLength: 250 })}></textarea>
                    </div>
                    <div className="mx-4 my-2 text-red-500">
                        {errors.details && <span> Task Details is required</span>}
                    </div>
                    <input className="btn border-transparent my-4 bg-[#1ed8f0] text-[#094148] hover:bg-[#1597a8] hover:text-white py-4 px-5" type="submit" value="Add Task" />
                </form>
            </div>
        </div>
    );
};

export default NewTask;