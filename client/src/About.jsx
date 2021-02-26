import React from 'react';


var About = () => {
  return (
    <div className="about_container" id="fade-in">

        <div className="col-1">
            <img src={'https://i.imgur.com/Tf72CGG.jpg'} className="photo"></img>
        </div>

        <div className="col-2">
          <p className="description_1" id="about">"If you don't know where you've come from, you don't know where you're going." - Maya Angelou.</p>


          <p className="description_2" id="about">I am my past. I'm an artist, a mentor, and a scientist. I speak equal parts Neil LeBute and Neil deGrasse Tyson. I consume fiction and self-help books. My MongoDB table has enough room for engineers and artists of every color, creed, and orientation. My React components are functional yet classy. My algorithms refuse to be sorted because I'm the last and ultimate iteration. </p>

          <p className="description_3" id="about"> All comedy aside, I bring humanity and compassion. Any team can my team. </p>
        </div>
    </div>
  )
};

export default About;