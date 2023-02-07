import React, { useState } from "react";
import { login, logout } from "../store";
import {useDispatch, useSelector } from "react-redux"

export const Login = () => {

  const [newUserName, setNewUserName] = useState<string>(""); 


  const dispatch = useDispatch();

   const username = useSelector((state: any) => state.user.value.useername)
  return (
    <h1>
      {username}
      <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
        setNewUserName(e.target.value);
      }}
      />
      <button onClick={() => dispatch(login({ username: newUserName}))}>Submit Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </h1>
  );
};

export default Login
