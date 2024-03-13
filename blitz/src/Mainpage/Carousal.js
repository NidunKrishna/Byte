import React, { useState } from 'react';
import { Card, Typography, Button,Flex } from 'antd';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';

const StyledCard = styled(Card)`
  width: 620px;
  margin-left: 40px;
  background-color: white;
  color: white;
  cursor: pointer;
`;

const Img = styled.img`
  display: block;
  width: 320px;
`;

const ContentWrapper = styled.div`
  padding: 32px;
`;

const FlippableCard = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <StyledCard key="front" hoverable onClick={handleClick}>
        <Flex justify="space-between">
          <Img
            alt="avatar"
            src="https://scontent.fmaa2-3.fna.fbcdn.net/v/t39.8562-6/118371872_2979410852184921_6072789506655055916_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f537c7&_nc_ohc=WOw5lTlXQKgAX9D4hQi&_nc_ht=scontent.fmaa2-3.fna&oh=00_AfBnz31tAhast_b_DWMQdsNhqourrrdyDCI_KwFEao8Wtg&oe=659EB4D4"
          />
          <ContentWrapper>
            <Typography.Title level={3} style={{ color: '#3495eb', fontSize: '20px' }}>
              Click here
            </Typography.Title>
            <Typography.Text style={{ color: 'grey', fontSize: '16px', textAlign: 'right' }}>
              
            </Typography.Text>
          </ContentWrapper>
        </Flex>
      </StyledCard>

      <StyledCard key="back" hoverable onClick={handleClick}>
        <Flex justify="space-between">
          <Img
            alt="avatar"
            src="https://scontent.fmaa2-3.fna.fbcdn.net/v/t39.8562-6/118371872_2979410852184921_6072789506655055916_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f537c7&_nc_ohc=WOw5lTlXQKgAX9D4hQi&_nc_ht=scontent.fmaa2-3.fna&oh=00_AfBnz31tAhast_b_DWMQdsNhqourrrdyDCI_KwFEao8Wtg&oe=659EB4D4"
          />
          <ContentWrapper>
            <Typography.Title level={3} style={{ color: '#3495eb', fontSize: '20px' }}>
              “Nidun has the Shinobi powers and he defeated isshin ashina i have witnessed it”
            </Typography.Title>
            <Typography.Text style={{ color: 'grey', fontSize: '16px', textAlign: 'right' }}>
              -Mark
            </Typography.Text>
            <Button type="primary" href="https://ant.design" target="_blank">
              Get Started
            </Button>
          </ContentWrapper>
        </Flex>
      </StyledCard>
    </ReactCardFlip>
  );
};

export default FlippableCard;