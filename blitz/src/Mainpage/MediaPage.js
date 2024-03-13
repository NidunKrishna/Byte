

import Header from '../components/Header/index'
import VideoPlayer from '../components/Videoplayer/index';
import Comments from '../components/comments/index'
import Inc from '../components/Inc'
import {GlobalStyle, MainContainer} from './styled'


function MediaPage() {
  return (
    <>
       <GlobalStyle />
    <MainContainer>
      <Header />
      <VideoPlayer />
      <Comments />
      <Inc />
    </MainContainer>
  </>
  
  );
}

export default MediaPage;
