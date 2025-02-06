import { AiOutlineAppstoreAdd, AiOutlineProduct } from "react-icons/ai";
import { FaArrowRight, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const handleSidebar = () => {
        document.getElementById("my-drawer-2").checked = false;
      };
    return (
        <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <label
          htmlFor="my-drawer-2"
          className="btn drawer-button lg:hidden"
        >
          <FaArrowRight></FaArrowRight>
        </label>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-72 bg-[#2E5077] min-h-full text-base-content pt-16">
          <button
            className=" lg:hidden btn mb-4 bg-[#2E5077] border-none"
            onClick={handleSidebar}
          >
            X
          </button>
          <div className="text-center">
              <h1 className="text-xl md:text-2xl font-poppins font-semibold">
                Xentro BD
              </h1>
            </div>
          <div className="divider"></div>
              <li className="text-lg md:text-xl font-semibold font-poppins">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#F6F4F0]" : ""
                  }
                  to="/dashboard/allUsers"
                >
                  {" "}
                  <FaUsers className="text-sm md:text-2xl"></FaUsers>{" "}
                  Users
                </NavLink>
              </li>
              <li className="text-lg md:text-xl font-poppins mt-4 font-semibold">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#F6F4F0]" : ""
                  }
                  to="/dashboard/allProducts"
                >
                  {" "}
                  <AiOutlineProduct className="text-sm md:text-2xl" />{" "}
                  Products
                </NavLink>{" "}
              </li>
              <li className="text-lg md:text-xl font-poppins mt-4 font-semibold">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#F6F4F0]" : ""
                  }
                  to="/dashboard/addProduct"
                >
                  {" "}
                  <AiOutlineAppstoreAdd className="text-sm md:text-2xl" />{" "}
                  Add Product
                </NavLink>{" "}
              </li>
        </ul>
      </div>
    </div>
    );
};

export default Dashboard;