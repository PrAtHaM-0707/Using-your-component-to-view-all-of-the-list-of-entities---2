import React from 'react';
import LikeButton from './likebutton';
import '../App.css';

function PostCard({ post, toggleLike }) {
  return (
    <div className="post-card">
      <img src={post.profileImage} alt={post.username} className="profile-pic" />
      <h3>{post.username}</h3>
      <p>{post.content}</p>
      <LikeButton isLiked={post.isLiked} onLike={() => toggleLike(post.id)} />
    </div>
  );
}

export default PostCard;