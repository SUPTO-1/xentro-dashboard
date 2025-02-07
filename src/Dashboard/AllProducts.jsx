import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import Swal from "sweetalert2";

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch("https://api.restful-api.dev/objects")
        .then(res => res.json())
        .then(data => {
           setProducts(data);
            setLoading(false);
        })
    },[]);
    const handleDelete = (id) => {
        fetch(`https://api.restful-api.dev/objects/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                const remaining = products.filter((product) => product.id !== id);
                setProducts(remaining);
                Swal.fire("Deleted!", "Your product has been deleted.", "success");
            });
    }
    //console.log(products);
    if(loading){
        return (
            <div className="flex justify-center items-center h-screen">
            <progress className="progress w-56"></progress>
          </div>
        )
    }
    return (
        <div>
            <h2 className="text-3xl font-poppins font-semibold text-center mt-10">Total Products : {products.length}</h2>
            <div className="divider mb-5"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                {
                    products.map(product => <SingleProduct key={product.id} product={product} handleDelete={handleDelete}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;