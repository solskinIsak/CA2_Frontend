import React, { useState,useEffect } from "react"
import facade from "../apiFacade";
function LoggedIn({user, logout}){
    const [dataFromServer, setDataFromServer] = useState("Loading...")

    useEffect(() => {
      const url = user.roles.split(',').includes('user') ? '/info/user' : '/info/admin';

      facade.fetchData(url).then(res => {
        console.log(res);
        setDataFromServer(res.msg)});

    },[])
  
    return (
      <div>
        {/*<h3>{dataFromServer}</h3>*/}
        <span>{user.username} with roles: {user.roles} <button onClick={logout}>Logout</button></span>
      </div>
    )
  }
export default LoggedIn;