import React, { useEffect, useState } from 'react';
import SingleUser from '../SingleUser/SingleUser';

const Users = () => {

  const [users, setUsers]= useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setUsers(data))
  },[])

  return (
    <div>
      <h1>Show the Users</h1>
      <h3>Total User: {users.length}</h3>
      {
        users.map(user => <SingleUser
        user = {user}
        key = {user.id}
        ></SingleUser>)
      }
    </div>
  );
};

export default Users;