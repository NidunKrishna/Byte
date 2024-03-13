import ReactPlayer from 'react-player'

import {
  VideoPlayerContainer,
  VideoTitle,
  VideoStats,
  HorizontalLine,
} from './style'

import './index.css'

const videoUrl = 'https://www.youtube.com/watch?v=X6JTspXGbeA'

const VideoPlayer = () => (
  <VideoPlayerContainer>
    <ReactPlayer
      url={videoUrl}
      controls
      width="100%"
      className="video-player"
    />
    <VideoTitle>Learn Python</VideoTitle>
    <VideoStats>**BY YOUR RESPECTIVE INSTITUTE**</VideoStats>
    <HorizontalLine />
  </VideoPlayerContainer>
)

export default VideoPlayer;
