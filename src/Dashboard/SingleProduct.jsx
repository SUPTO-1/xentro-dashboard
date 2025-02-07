const SingleProduct = ({ product, handleDelete}) => {
  const { name, data } = product;
  return (
    <div className="card bg-base-100 w-96 shadow-lg">
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p>
          <b>Description:</b> {data?.Description || "N/A"}
        </p>
        <div className="flex justify-baseline">
          <p className="text-lg">
            <b>Color:</b> {data?.color || "N/A"}
          </p>
          <p className="text-lg">
            <b>Capacity:</b> {data?.capacity || "N/A"}
          </p>
        </div>
        <div className="flex justify-baseline">
          <p className="text-lg">
            <b>Price:</b> {data?.price || "N/A"}
          </p>
          <p className="text-lg">
            <b>Generation:</b> {data?.generation || "N/A"}
          </p>
        </div>
        <div className="flex justify-baseline">
          <p className="text-lg">
            <b>CPU:</b> {data?.[`CPU model`] || "N/A"}
          </p>
          <p className="text-lg">
            <b>Hard Disk:</b> {data?.[`Hard disk size`] || "N/A"}
          </p>
        </div>
        <div className="mb-2">
          <p className="text-lg mb-2">
            <b>Strap Colour:</b> {data?.[`Strap Colour`] || "N/A"}
          </p>
          <p className="text-lg">
            <b>Case Size:</b> {data?.[`Case Size`] || "N/A"}
          </p>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={()=>handleDelete(product.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
