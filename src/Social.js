import React from 'react'

const Social = props => {
  return (
    <a 
      href={props.link} 
      target={"_blank"} 
      className={props.socialMediaIcon + " col social-media-link"}>
    </a>
  );
};

export default Social;