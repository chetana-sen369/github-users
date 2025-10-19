import React ,{ useContext }from "react";
import {Link} from "react-router-dom";
import { UserContext } from "../context/Context";

const Users = () => {
   const { users } = useContext(UserContext);

  return (
    <div className="container mt-4">
      <div className="row g-5">
        {users.map((user) => (
          <div key={user.id} className="col-md-3">
            <div className="card text-center h-100">
              <img
                src={user.avatar_url}
                className="card-img-top"
                alt={user.login}
              />
              <div className="card-body">
                <h5 className="card-title">{user.login}</h5>
                <Link to={`/userPage/${user.login}`}
                  rel="noreferrer"
                  className="btn btn-dark btn-sm"
                >
                  Git Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
