
import SectionTitle from "../../Shared/SectionTitle";
import useTasks from "../../hook/useTasks";

// import { FiPlusCircle  } from 'react-icons/fi';

const CompletedTask = () => {
    const [tasks] = useTasks();

    const completedTask = tasks.filter(task => task.status === "Completed");

    return (
    <div>
        {
            completedTask.length === 0 ? 
          <div>
              <SectionTitle subHeading="Here is no" heading="Completed Tasks"></SectionTitle>
              <p className='text-[#128290] text-center font-bold'>Please add your task! </p>
          </div>
            :
            <div>
            <SectionTitle subHeading="List of" heading="Completed Tasks"></SectionTitle>


            <div className="overflow-x-auto mx-10 shadow-xl">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Details</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            completedTask.map((task, index) =>
                                <tr key={task._id}>

                                    <td>{index + 1}</td>
                                    <td>
                                        <h1 className="text-xl font-bold">{task.title}</h1>
                                    </td>
                                    <td>
                                        <p className="text-gray-500">{task.details}</p>
                                    </td>
                                    <td >
                                        {task.status}
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

export default CompletedTask;