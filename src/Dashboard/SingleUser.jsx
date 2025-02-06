const SingleUser = ({ user }) => {
  //console.log(user);
  const { name, email, address } = user;
  return (
    <div className="card bg-base-100 w-96 shadow-lg">
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="text-lg">
          <b>Email:</b> {email}
        </p>
        <p className="text-lg">
          <b>City:</b> {address.city}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">See More</button>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
