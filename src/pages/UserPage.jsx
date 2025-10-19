import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/UserPage.css"; 
import {UserContext} from "../context/Context";
import LoadingSpinner from "../components/LoadingSpinner";

const UserPage = () => {
const {userId}=useParams();
const [user,setUser]=useState("");
const {getUser,userLoading}=useContext(UserContext);

 useEffect(()=>{
 async function fetchUser(){
 const userData=await getUser(userId);
  setUser(userData);
}
 fetchUser();
 },[userId]);
 
  if (!user) {
   return <LoadingSpinner />
  }
  return (
    <div className="user-card-container">
      <div className="user-card">
        <div className="user-header">
          <img src={user.avatar_url} alt={user.login} className="avatar" />
          <div className="user-info">
            <h1>{user.name || user.login}</h1>
            <p>{user.location ? user.location:"Location not specified "}</p>
            {user.hireable ? <p className="open-to-work">✅ Open to Work</p>: <p className="not-available">🚫Not available</p>}
            {user.bio && <p className="bio">{user.bio}</p>}
           <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>
            
        <div className="user-stats">
          <div>
            <h5>Followers</h5>
            <p>{user.followers}</p>
          </div>
          <div>
            <h5>Following</h5>
            <p>{user.following}</p>
          </div>
          <div>
            <h5>Repos</h5>
            <p>{user.public_repos}</p>
          </div>
          <div>
            <h5>Gists</h5>
            <p>{user.public_gists}</p>
          </div>
        </div>

        <div className="user-details">
          {user.company && (
            <p>
              <strong>Company:</strong> {user.company}
            </p>
          )}
          {user.blog && (
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.blog}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
