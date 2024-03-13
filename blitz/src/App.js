
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
// import Header from './components/Header/index'
// import VideoPlayer from './components/Videoplayer/index';
// import Comments from './components/comments/index'
// import Inc from './components/Inc'
import MediaPage from './Mainpage/MediaPage'
import MainPage from './Mainpage/Main'
import User from './UserDisplay/index';
import LeaderBoard from './UserDisplay/LeaderBoard';
import LandingPage from './Mainpage/LandingPage'
import Auth from './components/Auth'
import QuestionPage from './QuestionPage'
import Discussion from './Discussion'
import QuestionUpload from './QuestionPage/QuestionUpload'
import QuestionList from './QuestionPage/QuestionList'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
          <Route index element={<LandingPage />} />
          <Route path="MainPage" element={<MainPage/>}/>
          <Route path="MediaPage" element={<MediaPage />} />
          <Route path="User" element={<User/>}/>
          <Route path="LeaderBoard" element={<LeaderBoard/>}/>
          <Route path="Auth" element={<Auth/>}/>
          <Route path="QuestionPage" element={<QuestionPage/>}/>
          <Route path="Discussion" element={<Discussion/>}/>
          <Route path="QuestionUpload" element={<QuestionUpload/>}/>
          <Route path="QuestionList" element={<QuestionList/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
