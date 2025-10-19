import React, { useContext, useState, useEffect } from 'react';
import "../styles/Search.css";
import { UserContext } from "../context/Context";

const Search = () => {
  const [username, setUsername] = useState("");
  const { searchUsers, setUsers, defaultUsers } = useContext(UserContext);

  // store default users on first render
  useEffect(() => {
    if (defaultUsers && defaultUsers.length > 0) {
      setUsers(defaultUsers);
    }
  }, [defaultUsers]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setUsername(value);

    if (value.trim() === "") {
      setUsers(defaultUsers);
    } else {
      await searchUsers(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setUsers(defaultUsers);
    } else {
      await searchUsers(username);
    }
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search profiles (e.g. chetana, Anjali)"
          value={username}
          onChange={handleChange}
        />
        <button type="submit" className='btn-dark'>Search</button>
      </form>
    </div>
  );
};

export default Search;
