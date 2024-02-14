import React from "react";
import { useState, useEffect } from 'react';

export default function Home() {
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

    return (
        <div>
            <h1>Home</h1>
            <p>
                Welcome to the React app!
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