import React, { useState } from 'react';

const Like = () => {
  const [likeCount, setLikeCount] = useState(0); // State for like count
  const [dislikeCount, setDislikeCount] = useState(0); // State for dislike count
  const [userReaction, setUserReaction] = useState(0); // 1: liked, -1: disliked, 0: neutral


  const handleLike = () => {
    if (userReaction === 1) {
      setLikeCount(likeCount - 1);
      setUserReaction(0);

    } else {
      if (userReaction === -1) {
        setDislikeCount(dislikeCount - 1);

      }
      setLikeCount(likeCount + 1);
      setUserReaction(1);

    }
  };

  const handleDislike = () => {
    if (userReaction === -1) {
      setDislikeCount(dislikeCount - 1);
      setUserReaction(0);
    } else {
      if (userReaction === 1) {
        setLikeCount(likeCount - 1);
      }
      setDislikeCount(dislikeCount + 1);
      setUserReaction(-1);
    }
  };

  return (
    <div className='main'>
      <div className="post">
      <h1>Protecting Our Green Planet</h1>
      <img className='img' src="src/assets/environment.jpg" alt="" />
      <div>
        <button className={`like-btn ${userReaction === 1 ? 'active' : ''}`} onClick={handleLike} aria-label="Like">

          👍 {likeCount}
        </button>

        <button className={`dislike-btn ${userReaction === -1 ? 'active' : ''}`} onClick={handleDislike}>
          👎 {dislikeCount}
        </button>
      </div>

    </div>
    </div>
    
  );
};

export default Like;
