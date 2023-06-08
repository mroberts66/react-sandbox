import { useState } from 'react';
import './App.css';

function IndividualButton() {
    const [color, setColor] = useState('red');
    return <button className={color} onClick={() => setColor('blue')}>
        Button
    </button>
}

function ButtonExercise() {
    return (
        <>
            <h1>Hello Buttons</h1>
            <IndividualButton />
        </>
    );
}

export default ButtonExercise;