import React from 'react';
import { FiGithub } from 'react-icons/fi';

const Commerce = () => {
  const imgurLinks = ['https://i.imgur.com/YTgdgAt.png', 'https://i.imgur.com/tNVV3MG.png', 'https://i.imgur.com/OgRbkuQ.png', 'https://i.imgur.com/CyqcnBT.png', 'https://i.imgur.com/eK5TaUP.png'];
  return (
    <div className="projects-commerce-container">
      <div className="commerce-accordion">

        <div className="projects-carousel-outer">
          <div className="projects-commerce-carousel">
            {imgurLinks.map((link, index) => {
              return (
                <div>
                  <a href={link} key={index} target="blank">
                    <img src={link} className="projects-commerce-carousel-item"></img>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
        <div className="projects-commerce-text" style={{padding: '5px'}}>
          <p>Sometimes spending money is the best therapy.</p>
          <br></br>

          <p>Introducing RedStore: eCommerce Mock Website.</p>
          <br></br>

          <p>Elegant, succinct. This website shows  the user what is truly important: <b>shopping therapy</b>!
          </p>
          <br></br>

          <p>Combining <b>HTML and CSS</b>, this webpage gives you the ability to customize your storefront any way you like!</p>
          <br></br>

          <p>Try the carousel.</p>
          <br></br>
          <a href="https://jimmy-lin-91.github.io/eCommerceMock/" target="blank">
              <FiGithub style={{width: '18px', height: '18px', color: 'white'}}/>
            </a>
        </div>
      </div>
    </div>

  )
}

export default Commerce;
