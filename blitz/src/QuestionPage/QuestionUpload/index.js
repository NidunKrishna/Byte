import React, { useState } from "react";
import { Row } from "antd";

const Ques = (props) => {
    const { description } = props;
    const { statement, testcase } = description ?? { statement: '', testcase: '' };

    const onChangeStatement = (event) => {
        
    };

    const onChangeTestCase = (event) => {
        
    };

    return (
        <div>
            <h1>suhdo</h1>
            <textarea value={statement} onChange={onChangeStatement}></textarea>
            <textarea value={testcase} onChange={onChangeTestCase}></textarea>
        </div>
    );
};

export default Ques;
