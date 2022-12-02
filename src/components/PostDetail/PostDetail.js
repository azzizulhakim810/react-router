import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const params = useParams();
  // const {postId} = useParams();
  const [post, setPost] = useState([]);
  
  useEffect(()=> {
    const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setPost(data))

  },[params.postId])

  return (
    <div>
      <h1>This is post Detail for : {params.postId}</h1>
      <h3>Title:{post.title} </h3>
      <p>{post.body}</p>
      
    </div>
  );
};

export default PostDetail;