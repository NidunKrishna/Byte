import React, { useState } from "react";
import { Col, Row } from 'antd';

const App = () => {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setInputValue((prevValue) => prevValue + '\n');
        }
    };

    return (
        <div>
            <Row>
                <Col span={12}>
                    <img style={{ height: '100vh', width: '100%' }} src="https://i.pinimg.com/originals/55/43/8e/55438e26577b822120afdfde911109f3.png" alt="background" />
                </Col>
                <Col span={12}>
                    <div style={{ backgroundColor: 'white', height: '100vh', padding: '1em' }}>
                        <textarea
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            style={{
                                width: '100%',
                                height: '100%',
                                boxSizing: 'border-box',
                                fontSize: '1em',
                                textAlign: 'left',
                                border: 'none',
                                outline: 'none',
                                color: 'black',
                                background: 'transparent',
                                resize: 'none', // Prevent textarea resizing
                                backgroundColor:'black',
                                color:'white'
                            }}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default App;
