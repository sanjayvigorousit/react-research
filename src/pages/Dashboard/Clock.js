import React, { useEffect, useState } from 'react';
import "./Clock.css";

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

export default function Clock() {
    const time = useTime();
    const [color, setColor] = useState('lightcoral');

    const formattedTime = time.toLocaleTimeString(); // Format time as a readable string

    return (
        <div>
            <p>Pick a color:{' '}
                <select value={color} onChange={(e) => setColor(e.target.value)}>
                    <option value="lightcoral">Light coral</option>
                    <option value="midnightblue">Midnight Blue</option>
                    <option value="rebeccapurple">Rebecca Purple</option>
                </select>
            </p>
            <h1 style={{ color: color }}>
                {formattedTime}
            </h1>
        </div>
    );
}
