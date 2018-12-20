import React from 'react';
import Social from './Social';

const SocialList = props => {
  const list = [
    {
      link: "https://twitter.com/omeerfk",
      socialMediaIcon: "fa fa-twitter",
    }, 
    {
      link: "https://instagram.com/omeerfk",
      socialMediaIcon: "fa fa-instagram",
    },
    {
      link: "https://github.com/farukkaradeniz",
      socialMediaIcon: "fa fa-github",
    },
    {
      link: "https://linkedin.com/in/farukkaradeniz",
      socialMediaIcon: "fa fa-linkedin",
    },
    {
      link: "https://medium.com/@omeerfk",
      socialMediaIcon: "fa fa-medium",
    },
    {
      link: "mailto:krdnzomer@gmail.com",
      socialMediaIcon: "fa fa-envelope",
    },
  ];

  const socialMediaList = list.map((s, index) => {
    console.log(s);
    return (
      <Social 
        key={index} 
        link={s.link} 
        socialMediaIcon={s.socialMediaIcon}
      />
    );
  });

  return (
    <div  className="row fixed-bottom social-list">
        {socialMediaList}
    </div>
  );
};

export default SocialList;