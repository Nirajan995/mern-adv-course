import React from "react";
import FollowersList from "../FollowersList/FollowersList";
import Header from "../Header/Header";
import "./Followers.css";

export default function Followers() {
  return (
    <div className="followers">
      <Header title="Peoples" />
      <FollowersList />
    </div>
  );
}
