import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import userActions from "../actions/userAction";

const Users = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.usersList());
  }, []);
  return <div>Users</div>;
};

export default Users;
