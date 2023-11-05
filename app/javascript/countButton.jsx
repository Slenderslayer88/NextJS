import {useEffect, useState} from 'react'

export default function CountBtn({ amount, bgColor}){
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + amount);
    }

    function rollOverCount(){
        if(count > 10){
            setCount(0);
        }
    }


    const buttonStyle = {
        backgroundColor: bgColor,
        color: "white",
        borderRadius: "10px"
    }

    useEffect(rollOverCount, [count]);
    return (
        <div>
            <button style={buttonStyle} onClick={handleClick}>Increment +{amount}</button>
            <h2>{count}</h2>
        </div>
    )
}
