import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const OMDb = () => {

    const [input, setInput] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://www.omdbapi.com/?s=rocky&apikey=3bcc15cb')
        .then(response => {
            console.log('response', response)
            return response.json()
        })
        .then(res => {
            console.log(res)
            setProducts(res.Search)
        })
        .catch(error => {
            console.error(error)
        })

    }, [])

    const handleSearch = () => {
        fetch(`https://www.omdbapi.com/?s=${input}&apikey=3bcc15cb`)
        .then(response => {
            console.log('response', response)
            return response.json()
        })
        .then(res => {
            console.log(res)
            setProducts(res.Search)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="bg-secondary">
            <h1>Mi listado de mercadolibre</h1>
            <input value={input} onChange={ (e) => setInput(e.target.value) } />
            <button onClick={handleSearch}>Buscar</button>
            <ul style={{display: 'flex', flexDirection: 'column'}}>
                {products.map(product => <Link to={`/detail/${product.imdbID}`} key={product.imdbID}><img alt={product.Title} src={product.Poster} /> {product.Title}</Link>)}
            </ul>
        </div>
    )
}

export default OMDb