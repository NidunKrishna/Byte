import React from 'react';
import { Button, Card } from 'antd';
import CardDescription from './CardDescription';
import {Text,Button3} from './styled';
import {Link} from 'react-router-dom'

const { Meta } = Card;
const App = () => (
  <Card
    hoverable
    style={{
      width: 300,
      margin: 20,
      height: 300,
    }}
    cover={<img alt="example" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221007172821/Top-20-Product-Based-Companies-in-World.gif" />}
  >
    <Meta title="Product Companies" description="" />
    <br />
    <Link><Button type="link">Click here for Problem Solving</Button></Link>
  </Card>
);

const App2 = () => (
  <Card
    hoverable
    style={{
      width: 300,
      margin: 20,
      height: 400,
    }}
    cover={<img alt="example" src="http://www.veloxtech.in/static/images/expertise.gif" />}
  >
    <Meta title="Service Companies" description="" />
    <br />
    <Link><Button type="link">Click here for Problem Solving</Button></Link>
  </Card>
);

const App3 = () => (
  <Card
    hoverable
    style={{
      width: 300,
      margin: 20,
      height: 400,
    }}
    cover={<img alt="example" src="https://www.graffiti9.com/wp-content/themes/graffitipress/assets/images/seo/seo-benefits.gif" />}
  >
    <Meta title="BENCHFORDIS Companies" description="" />
    <br />
    <Link><Button type="link">Click here for Problem Solving</Button></Link>
  </Card>
);

const MainApp = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
    <div>
      <App />
      <App2 />
      <App3 />
    </div>
    <div style={{marginTop:'50PX',fontSize:'20px',fontFamily:'monospace',fontWeight:'400',color:'#2029a8',backgroundColor:'smokeywhite'}}>
    <Text hoverable >For product companies Algorithmic proficiency and troubleshooting skills are essential for efficient code development and issue resolution. Adaptability is key in the dynamic tech landscape, requiring attention to detail and a systematic approach for accurate problem identification. 
    <CardDescription/>
    </Text>
    <br /><br /><br /><br /><br />
    <Text hoverable >A service is an intangible solution provided by businesses or individuals, involving professional consulting, support, education, and maintenance. Proficiency in programming languages such as Python, JavaScript, Java, or others relevant to the product's tech stack.
Scripting skills for automation and tool development
<CardDescription/>
</Text>
    <br /><br /><br /><br /><br /><br />
    <Text>Problem-solving in Unix-based companies requires a deep understanding of Unix/Linux systems, command-line operations, and shell scripting. Analytical skills are essential for identifying and resolving system-level issues, while troubleshooting expertise ensures efficient problem resolution. Adaptability to diverse Unix environments and attention to detail are critical for maintaining system integrity.
    <CardDescription/>
    </Text>
    </div>
  </div>
);

export default MainApp;
