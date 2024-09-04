import React, { useContext, useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  const handleCardClick = (text) => {
    setInput(text);
  };

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        {/* <img src={assets.user_icon} alt="" /> */}
        <img src={"https://i.ibb.co/Y8T6q7B/hafeez-profile-circle.png"} alt="" />
      </div>
      <div className="main-container">
        {showResult ? (
          <div className="result">
            <div className='result-title'>
              {/* <img src={assets.user_icon} alt="" /> */}
              <img src={"https://i.ibb.co/Y8T6q7B/hafeez-profile-circle.png"} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="greet">
              <p><span>Hey There!</span></p>
              <p>What can I do for you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => handleCardClick('Recommend scenic and must-see destinations for our next road trip')}>
                <p>Recommend scenic and must-see destinations for our next road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick('Describe the basic principles of starting a successful small business')}>
                <p>Describe the basic principles of starting a successful small business</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick('Brainstorm innovative ideas for a community volunteer project')}>
                <p>Brainstorm innovative ideas for a community volunteer project</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card" onClick={() => handleCardClick('Improve the readability and user experience of this mobile app interface')}>
                <p>Improve the readability and user experience of this mobile app interface</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder='Enter prompt'
            />
            <div>
              <img src={assets.gallery_icon} width={30} alt="" />
              <img src={assets.mic_icon} width={30} alt="" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} width={30} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
