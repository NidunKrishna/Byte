import React, { useState, useEffect } from 'react';
import { LeaderboardContainer, LoadingViewContainer } from './styled';
import {ThreeCircles,DNA,Discuss,TailSpin, Vortex} from 'react-loader-spinner';
import LeaderboardTable from '../LeaderTable';
import { Button, Result } from 'antd';
import LandingPage from '../../../Mainpage/LandingPage'
import {Link} from 'react-router-dom'

const Leaderboard = () => {
  const apiStatusConstants = {
    initial: 'INITIAL',
    inProgress: 'IN_PROGRESS',
    success: 'SUCCESS',
    failure: 'FAILURE',
  };

  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://apis.ccbp.in/leaderboard';
      const options = {
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU',
        },
      };

      setApiResponse({
        status: apiStatusConstants.inProgress,
        data: null,
        errorMsg: null,
      });

      try {
        const response = await fetch(url, options);
        const responseData = await response.json();
        if (response.ok) {
          
        setApiResponse(prevApiResponse=>({
            ...prevApiResponse,
            status: apiStatusConstants.success,
            data: responseData,
            errorMsg: null,
          }));
        }

        
      } catch (error) {
        console.error('Fetch error:', error);
        setApiResponse({
          status: apiStatusConstants.failure,
          data: null,
          errorMsg: 'Failed to fetch data from the API',
        });
      }
    };

    fetchData();
  }, []); 

  const renderLoadingView = () => (
    <LoadingViewContainer>
            <DNA color="#ffffff" height="50" width="50" />
    </LoadingViewContainer>
  );

  const renderSuccessView = () => {
    const {data} = apiResponse
    const formattedLeaderboardData = data.leaderboard_data.map(eachUser => ({
      id: eachUser.id,
      rank: eachUser.rank,
      name: eachUser.name,
      profileImgUrl: eachUser.profile_image_url,
      score: eachUser.score,
      language: eachUser.language,
      timeSpent: eachUser.time_spent,
    }))
    return <LeaderboardTable leaderboardData={formattedLeaderboardData} />
  };

  const renderFailureView = () => (
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to='/MainPage'><Button type="primary">Back Home</Button></Link>}
  />
);
    
  
  const renderLeaderboard = () => {
    const { status } = apiResponse;

    switch (status) {
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return <LeaderboardContainer>{renderLeaderboard()}</LeaderboardContainer>;
};

export default Leaderboard;
