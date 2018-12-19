import React from 'react'

const Social = props => {
  return (
    <a href={props.link} target={"_blank"} className="social-media-link">
      <span className={props.socialMediaIcon}></span>
    </a>
  );
};

export default Social;