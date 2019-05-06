import React from "react";
import styled, { keyframes, css } from "styled-components";

const falling = keyframes`
    0% {
        opacity: 1;
        transform: translate3d(0,0,0);
    }
    
    100% {
        opacity: 1;
        transform: translate3d(15px, 110vh, 0px);
    }
`;

const emojiStyle = ({ fontSize, duration }) => css`
  font-size: ${fontSize}px;
  display: inline-block;
  position: relative;
  z-index: 5;
  animation: ${falling} ${duration}s 1 linear none;
`;

const Emoji = styled.div([emojiStyle]);

Emoji.defaultProps = {
  fontSize: 40,
  duration: 3
};

const EmojiContainer = styled.div`
  position: absolute;
  text-align: center;
  aria-hidden: true;
  width: 100%;
  top: -90px;
  left: 0;

  ${Emoji}:nth-child(3n) {
    width: 16px;
    height: 4px;
    animation-duration: 2s;
    animation-iteration-count: 1;
    transform-origin: right -45px;
  }

  ${Emoji}:nth-child(3n+1) {
    width: 24px;
    height: 6px;
    animation-duration: 4s;
    animation-iteration-count: 1;
    transform-origin: right -30px;
  }

  ${Emoji}:nth-child(3n+2) {
    width: 32px;
    height: 8px;
    animation-duration: 6s;
    animation-iteration-count: 1;
    transform-origin: right -15px;
  }

  /* different delays so they don't all start at the same time */
  ${Emoji}:nth-child(7n) {
    opacity: 0.3;
    animation-delay: 0s;
    animation-timing-function: ease-in;
  }

  ${Emoji}:nth-child(7n+1) {
    opacity: 0.4;
    animation-delay: 1s;
    animation-timing-function: ease-out;
  }

  ${Emoji}:nth-child(7n+1) {
    opacity: 0.4;
    animation-delay: 1s;
    animation-timing-function: ease-out;
  }
  ${Emoji}:nth-child(7n+1) {
    opacity: 0.4;
    animation-delay: 1s;
    animation-timing-function: ease-out;
  }
  ${Emoji}:nth-child(7n+2) {
    opacity: 0.5;
    animation-delay: 1.5s;
    animation-timing-function: linear;
  }
  ${Emoji}:nth-child(7n+3) {
    opacity: 0.6;
    animation-delay: 2s;
    animation-timing-function: ease-in;
  }
  ${Emoji}:nth-child(7n+4) {
    opacity: 0.7;
    animation-delay: 2.5s;
    animation-timing-function: linear;
  }
  ${Emoji}:nth-child(7n+5) {
    opacity: 0.8;
    animation-delay: 3s;
    animation-timing-function: ease-out;
  }
  ${Emoji}:nth-child(7n+6) {
    opacity: 0.9;
    animation-delay: 3.5s;
    animation-timing-function: ease-in;
  }
`;

const AnimatedEmoji = ({ emoji, howMany, fontSize, duration }) => {
  const renderEmojis = () => {
    const emojis = Array(howMany).fill(emoji);
    return emojis.map((emoji, index) => (
      <Emoji key={index} fontSize={fontSize} duration={duration}>
        {emoji}
      </Emoji>
    ));
  };

  return <EmojiContainer>{renderEmojis()}</EmojiContainer>;
};

AnimatedEmoji.defaultProps = {
  emoji: "😁",
  howMany: 25
};

export default AnimatedEmoji;
