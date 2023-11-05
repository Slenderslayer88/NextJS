'use client';

import CountButton from './javascript/nextJS.jsx'

export default function Page() {
    return <div>
        <div>
            <CountButton amount={1}/>
            <CountButton amount={2}/>
        </div>
        <div>
            <h2>Github URL:</h2> <p>https://github.com/Slenderslayer88/NextJS.git</p>
        </div>
    </div>
}