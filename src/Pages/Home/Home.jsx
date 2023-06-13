import { Link, Outlet } from "react-router-dom";
import { BsListTask  } from 'react-icons/bs';
import { MdTaskAlt  } from 'react-icons/md';
import { FiPlusCircle  } from 'react-icons/fi';
const Home = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  justify-center">
  <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button bg-[#1597a8] my-5 lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu  p-6 w-80 h-full bg-[#1ed8f0] text-white">
        <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold mb-3"><span className="text-3xl font-bold">T</span>ask Management</h1>
        <Link to="/newtask"><button className="text-3xl" title="Add New Task"><FiPlusCircle/></button></Link>
        </div>
      {/* Sidebar content here */}
      <li className="text-base"><Link to="/"><BsListTask/>My Task</Link></li>
      <li className="text-base"><Link to="/comppletedtask"><MdTaskAlt/>Completed Task</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Home;