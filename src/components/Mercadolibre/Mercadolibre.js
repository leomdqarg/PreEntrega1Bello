import { useEffect, useState } from "react"

const Mercadolibre = () => {

    const [input, setInput] = useState('')
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares')
        .then(response => {
            console.log('response', response)
            return response.json()
        })
        .then(res => {
            console.log(res)
            setProducts(res.results)
        })
        .catch(error => {
            console.error(error)
        })

    }, [])

    const handleSearch = () => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then(response => {
            console.log('response', response)
            return response.json()
        })
        .then(res => {
            console.log(res)
            setProducts(res.results)
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
            {products.map(product => <div key={product.id}><img alt={product.title} src={product.thumbnail} /> {product.title}</div>)}
        </div>
    )
}

export default Mercadolibre