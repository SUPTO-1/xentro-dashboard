import { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, [users]);
  //console.log(users);
  const searchUser = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  })
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  return (
    <div className="mt-4">
      <div className="text-center mt-10">
        <div className="md:flex justify-between p-4">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" onChange={(e)=>setSearch(e.target.value)} />
          </label>
          <h2 className="text-3xl font-poppins font-bold text-[#213555]">
            Total User : {users.length}
          </h2>
        </div>
        <div className="divider mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {searchUser.map((user) => (
            <SingleUser key={user.id} user={user}></SingleUser>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
