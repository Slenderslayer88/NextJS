import {useEffect, useState} from 'react'

export default function CountBtn({ amount }){
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + amount);
    }

    function rollOverCount(){
        if(count > 10){
            setCount(0);
        }
    }

    useEffect(rollOverCount, [count]);
    return (
        <div>
            <button onClick={handleClick}>Increment +{amount}</button>
            <h2>{count}</h2>
        </div>
    )
}
