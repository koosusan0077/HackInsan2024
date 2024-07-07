import React, { useState } from 'react';
import logo from './logo.svg';
import loveOutline from './components/love.svg'; // Outline heart icon
import loveFilled from './components/love_filled.svg'; // Filled heart icon
import download from './components/download.svg';
import bookmark from './components/bookmark.svg';
import profile1 from './components/profile1.svg';
import noteImage from './Image/Image/noteImage.jpg'; // Ensure the image is in the appropriate directory
import './Home.css';

const Home = () => {
  const [likes, setLikes] = useState(298);
  const [isLiked, setIsLiked] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 500); // Duration of the animation
  };

  return (
    <div className="home">
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <div className="menu-icon">☰</div>
      </div>
      <hr className="divider" />
      <div className="note-display">
        <img src={noteImage} alt="Work & Energy Notes" />
      </div>
      <div className="note-details">
        <div className="note-title-container">
          <div className='note-title'>Work & Energy</div>
          <div className='icons'>
            <img src={download} alt='download-icon' className='icon' />
            <img src={bookmark} alt='bookmark-icon' className='icon' />
          </div>
        </div>
        <div className="tags">
          <span className="tag">Physics</span>
          <span className="tag">Form 5</span>
        </div>
        <div className='like-section'>
          <div className="love-icon-container">
            <img 
              src={isLiked ? loveFilled : loveOutline} 
              alt='love-icon' 
              className='love-icon' 
              onClick={handleLikeClick} 
              style={{ cursor: 'pointer' }}
            />
            <div className={`love-icon-gradient ${animate ? 'active' : ''}`}></div>
          </div>
          <p>{likes} people found this useful</p>
        </div>
      </div>
      <div className="qna-section">
        <div className="qna-section">
          <span className="qna-title">Q&A</span>
          <span className="qna_num">367</span>
        </div>
        <div className="comment-section">
          <div className='comment'>
            <img src={profile1} alt="David Miller" className="avatar" />
            <div className="comment-content">
              <p><strong>David Miller</strong>: I like this a lot! However, I’d appreciate it if you could further explain to me regarding this part...</p>
              <p className='reply'>Reply</p>
            </div>
          </div>
          {/* Add other comments similarly */}
        </div>
      </div>
    </div>
  );
};

export default Home;
