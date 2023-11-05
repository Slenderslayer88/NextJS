import {useEffect, useState} from 'react'
import "../css/styles.css"

export default function SearchBar(){

    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState("")

    function fetchAPIData(){
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => products.filter((product) => {
            return product.title.toLowerCase().includes(searchString.toLowerCase())
        }))
        .then(products => {
            const currentFilter = products.map((product, index) => {
                return (<div className='product'>
                        <h4>{product.title}</h4>
                        <h1 style={{ 'fontSize': "1rem" }}>{product.price}</h1>
                        <img className='product_img' src={product.image} alt={product.title}></img>
                    </div>
                )
            })
            setFilteredProducts(currentFilter)
        })
    }

    function OnsearchStringChanged(event){
        setSearchString(event.target.value)
    }

    useEffect(fetchAPIData, [])
    useEffect(fetchAPIData, [searchString])
    return (
        <div>
            <h2>Search Bar</h2>
            <form>
                <input type='text' id='searchBar' value={searchString} onChange={OnsearchStringChanged}></input>
            </form>
            <div className='search_results'>{filteredProducts}</div>
        </div>
        
    )
}