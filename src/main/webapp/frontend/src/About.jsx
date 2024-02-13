
import React from 'react';
import { useState, useEffect } from 'react';

export default function About() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/wildbook/fakeApi.jsp');
                const jsonData = await res.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log(data);
      
    return (
        <div>
        <h1>About</h1>
        <p>
            This is a simple React app that demonstrates how to use Spring Boot and React.
        </p>
        <p>
            {data.map((item) => (
                <div key={item.id}>
                    <h1>12345</h1>
                    <h3>{item.names[0]}</h3>
                    <p>{item.id}</p>
                </div>
            ))
            }
        </p>
        </div>
    );
}
