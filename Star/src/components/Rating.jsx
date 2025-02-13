import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const Rating = ({ initialRating }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  return (
    <div className=" main">
      <h1 className="">Star Rating</h1>
      <div className="">
        <div className="star">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              size={30}
              className=" main-star"
              color={(hover || rating) >= star ? "#FFD700" : "#D3D3D3"}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            />
          ))}
        </div>
        <p className="text-lg font-semibold">{rating}/5 Rating</p>
      </div>
    </div>
  );
};

Rating.propTypes = {
  initialRating: PropTypes.number,
};

Rating.defaultProps = {
  initialRating: 0,
};

export default Rating;