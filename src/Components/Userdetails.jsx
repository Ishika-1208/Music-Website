import React from "react";
import "../Styles/UserDetails.css"; // Import CSS for styling
import person from "../Images/person.png";
import  {Link} from "react-router-dom";

const UserDetails = () => {
  return (
    <div className="user-details-container">
      <div className="user-avatar">
        <img
          src={person} // Replace with your avatar image URL
          alt="User Avatar"
          className="avatar-image"
        />
      </div>
      <h1 className="title">Email address after login</h1>
      <div className="form-container">
        <input type="text" placeholder="User name" className="input-field" />
        <input type="email" placeholder="Email address" className="input-field" />
        <button className="logout-button">Log Out</button>
        <p className="change-ps">Change the password?<Link to="/ForgotPs2"className="forgotps">Click here</Link></p>
      </div>
    </div>
  );
};

export default UserDetails;
