import React from 'react';

const Commerce = () => {
  const imgurLinks = ['https://i.imgur.com/YTgdgAt.png', 'https://i.imgur.com/tNVV3MG.png', 'https://i.imgur.com/OgRbkuQ.png', 'https://i.imgur.com/CyqcnBT.png', 'https://i.imgur.com/eK5TaUP.png'];
  return (

      <div className="projects-commerce-carousel">
        {imgurLinks.map((link, index) => {
          return (
            <div>
              <a href={link} target="blank">
                <img src={link} className="projects-commerce-carousel-item"></img>
              </a>
            </div>
          )
        })}
      </div>

  )
}

export default Commerce;
