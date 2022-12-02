import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  // const params = useParams();
  const {userId} = useParams();

  const [user, setUser] = useState({});

  useEffect(()=> {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    fetch(url)
    .then(res => res.json())
    .then(data=> setUser(data))
  },[])

  return (
    <div>
      <h1>This is user detail:{userId}</h1>
      <h3>Name: {user.name}</h3>
      <h3>Username: {user.username}</h3>
      <h3>Email: {user.email}</h3>
      <h5>City: {user.address?.city}</h5>
    </div>
  );
};

export default UserDetail;