import { useEffect, useState } from "react";
import { data } from "react-router-dom";

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
            setLoading(false)
        })
    })
    console.log(users);
    if(loading){
        return <progress className="progress w-56 flex justify-center items-center mx-auto mt-16"></progress>
    }
    return (
        <div>
            
        </div>
    );
};

export default AllUsers;