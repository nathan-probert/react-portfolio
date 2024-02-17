import React, { useState, useEffect } from 'react';
import "./hockeypicks.css";

function App() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/list')
            .then(response => response.json())
            .then(data => setList(data))
            .catch(error => console.error('Error fetching list:', error));
    }, []);

    return (
        <div>
            <h1>List</h1>
            <ul>
                {list.map(item => (
                    <li key={item.name}>
                        <div>Name: {item.name}</div>
                        <div>Stat: {item.stat}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
