import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({}); // ✅ Start with an empty object

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56"></progress>
        <p className="text-gray-500 text-lg mt-2">Fetching user data...</p>
      </div>
    );
  }

  return (
    <div className="p-6 sm:p-12 dark:bg-gray-50 dark:text-gray-800 mt-10">
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <img
          src="https://source.unsplash.com/75x75/?portrait"
          alt=""
          className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
        />
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-center md:text-left">
              {user.name}
            </h4>
            <p className="text-sm dark:text-gray-400">{user.username}</p>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <MdOutlineMarkEmailRead className="text-lg inline-flex" />
            <p className="dark:text-gray-600">{user.email}</p>
          </div>
          <div className="flex items-center space-x-1 mt-2">
            <FaPhoneAlt className="text-lg" />
            <p className="dark:text-gray-600">{user.phone}</p>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="mt-10 border-2 border-[#344CB7] p-2 text-center">
          <h1 className="text-2xl font-poppins font-semibold">Company</h1>
          <div>
            <p className="text-xl font-poppins font-semibold">
              Name: {user.company.name}
            </p>
            <p className="text-lg font-poppins font-semibold">
              CatchPhrase: {user.company.catchPhrase}
            </p>
            <p className="text-lg font-poppins font-semibold">
              Bs: {user.company.bs}
            </p>
          </div>
        </div>
        <div>
          <div className="mt-10 border-2 border-[#344CB7] p-2 text-center">
          <h1 className="text-2xl font-poppins font-semibold">Address</h1>
          <div>
            <p className="text-lg font-poppins font-semibold">
              Street: {user.address.street}
            </p>
            <div className="flex gap-5">
            <p className="text-lg font-poppins font-semibold">
              Suite: {user.address.suite}
            </p>
            <p className="text-lg font-poppins font-semibold"> City: {user.address.city}</p>
            </div>
            <p className="text-lg font-poppins font-semibold">
              Zipcode: {user.address.zipcode}
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
