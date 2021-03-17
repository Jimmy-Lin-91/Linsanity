import React from 'react';

const HomeTexts = ({ sound, playTypingSound }) => {

  return (

    <div className="home-info">
      <h1 className="title"> Jimmy Lin </h1>
      <div>
        <h4
        className="homeText1">
        Front End:
        </h4>
        <h6 className="home-languages1">React | React Native | HTML | CSS</h6>
        <h4
        className="homeText2">Back End: </h4>
        <h6 className="home-languages2">MongoDB | PostgreSQL | Express | Node</h6>
      </div>
    </div>
  )
}

export default HomeTexts;