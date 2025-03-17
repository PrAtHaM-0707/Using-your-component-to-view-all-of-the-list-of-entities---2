import React from 'react';
import '../App.css';

function LikeButton({ isLiked, onLike }) {
  return (
    <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={onLike}>
      {isLiked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
}

export default LikeButton;