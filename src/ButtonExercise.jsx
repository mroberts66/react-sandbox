import { useState } from 'react';
import './App.css';

function IndividualButton() {
    // to do: use an array of colors. add/remove from array functionality, click cycling
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