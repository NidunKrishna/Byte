
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/push');
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const renderData = () => {
        if (!Array.isArray(data)) {
            console.error('Data is not an array:', data);
            return null;
        } }
    

    return (
        <div>
            <h2>Data from Server</h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.username} - {item.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataComponent;
