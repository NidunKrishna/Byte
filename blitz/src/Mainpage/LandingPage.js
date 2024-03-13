import React from 'react';
import { Layout, theme } from 'antd';
import {GlowingText,Para,Span,Card}from'./styled'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Outlet} from "react-router-dom";
import User from '../UserDisplay/index'
import MediaPage from '../components/Videoplayer/index';
import Auth from '../components/Auth/index';
import Carousel from './Carousal';
// import GetQuestions from '../GetQuestion'

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
const Style =()=>{
    return{
        height:150,
    }
}
const Navitem=()=>{
    return{
        margin: 10,
        textAlign: "right",
        color:'white',
      };
}
  return (
    <Layout style={{ backgroundColor: 'black', height:'1300px' }}>
        <div style={{textAlign:'right'}}>
      <Header
      >
        <img src='https://i.postimg.cc/Y46pgYC5/Whats-App-Image-2024-01-04-at-7-18-55-PM.jpg' alt='Whats-App-Image-2024-01-04-at-7-18-55-PM' style={{  width:170,height:0}}/>
        <span><Link to = "/User" style={Navitem()}> Profile </Link></span>
        <span><Link to = "/Auth" style={Navitem()}> Log in </Link></span>
          <span><Link to = "/MediaPage" style={Navitem()}> Learn </Link></span>
          {/* <span><Link to = "/GetQuestions" style={Navitem()}> Questions </Link></span> */}
          
      </Header>
      </div>

      <Content style={{ padding: '0 50px',color:'white' }}>
        <GlowingText>MAKE DENT <br />
        <Span >IN THIS UNIVERSE</Span>
        BY CODE</GlowingText>

        <Para>LEARN TO CODE <span style={{fontFamily:'Fantasy'}}>FOR </span>getting placed</Para>
        <p style={{color:"#C0C0C0",}}>With CodeRank, we elevate skills and secure promising opportunities. Engaging with challenges sharpens problem-solving and coding proficiency. Our code becomes a thread, weaving into the fabric of technological advancement. Through CodeRank, we craft a legacy, making a dent in the universe of possibilities.</p>
        <div style={{display:'flex',direction:'space-between'}}><Card hoverable >
            <img src="https://media.istockphoto.com/id/670060572/photo/businessman-with-flying-cubes.jpg?s=612x612&w=0&k=20&c=Z4ONMaRxJnbUgyrqDvEmClZBmsZGKWO9974TqYdaxyo=" style={Style()} /><h1 style={{color:'#346beb',fontSize:28}}>Pattern solving</h1><p style={{color:'#346beb'}}>Pattern solving is an engaging mental exercise that sharpens problem-solving skills and fosters a creative mindset</p></Card><Card><img src='https://media.istockphoto.com/id/639198068/photo/business-people-finding-solution-together-at-office.jpg?s=612x612&w=0&k=20&c=apxfQgMQ4KfWvTxdtyefbxIRiK0DVk7lFr4GbGSniR8=' style={Style()}/><h1 style={{color:'#346beb',fontSize:28}}>Number based</h1><p style={{color:'#346beb'}}>Pattern solving is an engaging mental exercise that sharpens problem-solving skills and fosters a creative mindset</p></Card>
            <Card><img src='https://media.istockphoto.com/id/1134956618/photo/a-symbol-for-finding-a-solution-dice-and-a-light-bulb-form-the-word-solution.jpg?s=612x612&w=0&k=20&c=f0eYm62bIM80Gyy3jJCRJBwoPN9Uz7Yd63ikGJZYdeI=' style={Style()}/><h1 style={{color:'#346beb',fontSize:28}}>DSA</h1><p style={{color:'#346beb'}}>Data Structures and Algorithms (DSA) form the backbone of efficient and optimized software development</p></Card>
            <Card><img src='https://media.istockphoto.com/id/1127257350/photo/hand-holding-light-bulb-and-business-digital-marketing-innovation-technology-icons-on-network.jpg?s=612x612&w=0&k=20&c=mOViL8W1NjWxe2EyDqwwu_61zbkOWi6ZgfxspjAPt3k=' style={Style()}/><h1 style={{color:'#346beb',fontSize:28}}>CRF</h1><p style={{color:'#346beb'}}>(choose your right framework)</p></Card></div>
      </Content>
      <div style={{display:'flex',direction:'space-between'}}>
      <Carousel/>
      <Carousel/>
      </div>
    </Layout>
  );
};

export default App;
