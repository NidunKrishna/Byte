import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const App = () => (
  <Card
    style={{
      width: 500,
      margin:50,
      height:600,
    }}
    cover={
      <img
        alt="example"
        src="https://www.sekirothegame.com/content/dam/atvi/sekiro/gallery/Sekiro-conceptart-14.jpg"
        style={{
            height:300,
        }}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="SEKIRO"
      description="LEARNER"
    />
     <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>PHONE</p>
      <p style={{ textAlign: 'right' }}>808343094</p>
    </div> <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>Email</p>
      <p style={{ textAlign: 'right' }}>sekiro@gmail.com</p>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>Gender</p>
      <p style={{ textAlign: 'right' }}>Male</p>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p>Occupation</p>
      <p style={{ textAlign: 'right' }}>Shinobi</p>
    </div>
  </Card>

);
const App2 = () => {
    return (
      <Card
        hoverable
        style={{
          width: 300,
          margin: 20,
          height: 500,
        }}
        cover={<img alt="example" src="https://www.sekirothegame.com/content/dam/atvi/sekiro/gallery/Sekiro-conceptart-11.jpg" />}
      >
        <Meta title="True Monk" description="Learner" />
      </Card>
     
    );
  };
  const App3=()=>{
return(
    <Card
        hoverable
        style={{
          width: 300,
          margin: 20,
          height: 500,
        }}
        cover={<img alt="example" src="https://www.sekirothegame.com/content/dam/atvi/sekiro/gallery/Sekiro-conceptart-11.jpg" />}
      >
        <Meta title="True Monk" description="Learner" />
      </Card>
);
  }
  const MainApp = () => (
    <div style={{ display: 'flex', flexDirection: 'space-between', alignItems: 'center' }}>
      <App />
      <App2 />
      <App3 />
    </div>
  );
  
  export default MainApp;