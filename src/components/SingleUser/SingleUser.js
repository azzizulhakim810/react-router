import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleUser = (props) => {

  const navigate = useNavigate();

  const showUserDetail = () => {
    const path = `/singleuser/${id}`;
    navigate(path);
  };
  // console.log(props.user);
  const {name, id, email, username} = props.user;
  return (
    <div>
      <h1>Name:{name}</h1>
      <p>Email:{email}</p>
      <button onClick={showUserDetail}>{username}: id: {id}</button>
    </div>
  );
};

export default SingleUser;