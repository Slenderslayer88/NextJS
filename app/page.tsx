'use client';

import CountButton from './javascript/countButton.jsx'
import SearchBar from './javascript/searchBar.jsx'


export default function Page() {
    return <div>
        <div>
            <CountButton amount={1} bgColor={"grey"}/>
            <CountButton amount={2} bgColor={"blue"}/>
        </div>
        <div>
            <h2>Github URL:     <a href="https://github.com/Slenderslayer88/NextJS.git">https://github.com/Slenderslayer88/NextJS.git</a></h2> 
        </div>
        <div>
            <SearchBar/>
        </div>
    </div>
}