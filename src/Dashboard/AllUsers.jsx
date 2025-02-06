import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import SingleUser from "./SingleUser";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  });
  //console.log(users);
  if (loading) {
    return (
      <progress className="progress w-56 flex justify-center items-center mx-auto mt-16"></progress>
    );
  }
  return (
    <div className="mt-4">
      <div className="text-center mt-10">
        <h2 className="text-3xl font-poppins font-bold text-[#213555]">
          Total User : {users.length}
        </h2>
        <div className="divider mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {users.map((user) => (
            <SingleUser key={user.id} user={user}></SingleUser>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
