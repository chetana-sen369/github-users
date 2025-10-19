import React, {useContext} from "react";
import Search from "../components/Search";
import Users from "../components/Users";
import {UserContext} from "../context/Context";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
const {users,loading} = useContext(UserContext);
  return (
    <div className="container mt-4">
      <Search />
      {loading ? <LoadingSpinner/> :<Users />}
    </div>
  );
}

export default Home;
