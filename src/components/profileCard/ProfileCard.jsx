import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ avatar, firstName, lastName, occupation, hobbies }) => {
  return (
    <div className="profile-card">
      <img
        src={avatar}
        alt={`${firstName} ${lastName}`}
        className="profile-card__avatar"
      />
      <h2 className="profile-card__name">
        {firstName} {lastName}
      </h2>
      <p className="profile-card__occupation">{occupation}</p>
      <p className="profile-card__hobbies">Hobbies: {hobbies.join(", ")}</p>
    </div>
  );
};

export default ProfileCard;
