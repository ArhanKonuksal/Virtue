import "./SoftwareSolutionsSection5.css";
import React from "react";

const SoftwareSolutionsSection5 = ({ quote, author, title, profileImage }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <div className="line-softwaresection5-top"></div>
        <p className="quote">
          <em>{quote}</em>
        </p>

        <div className="author">
          <div className="author-details">
            <h4>{author}</h4>
            <p>{title}</p>
          </div>
          <img src={profileImage} alt={author} className="profile-img" />
          <div className="line-softwaresection5-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareSolutionsSection5;
