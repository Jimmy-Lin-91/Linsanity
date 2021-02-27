import React from 'react';
import Loading from './Loading.jsx';

var Explorer = (props) => {
  const {hailing, handleAccept} = props;
  if (!hailing) {
    return (
      <div className="hailing">
        <Loading handleAccept={props.handleAccept} hailing={props.hailing}/>
      </div>
    )
  } else {
    return (
      <div className="about_container" id="fade-in">
          <div className="col-1">
            <p className="description_1">I..'m sorry the connection..is..rrible. Ah, there. Fixed it. Hi, traveller! Either you're stalking me or you've landed on my page for your research. Either way, thank you for reaching out. While I was on Earth, I was an actor, restaurant manager, and a programmer. As you can see, I'm not done telling stories just yet. And that's what I believe life is: stories. The clearer you can tell it, the more engaged your users will become. Just like what's happening to you now. If my message has rang true in any way, please reach out. I miss Earth and I need human intera...da.m.n...conn...bad...gain.</p>
          </div>
          <div className="col-2">
              <img src={'https://i.imgur.com/Tf72CGG.jpg'} className="photo"></img>
          </div>

      </div>
    )
  }
};

export default Explorer;