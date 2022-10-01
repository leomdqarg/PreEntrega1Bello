import { getProducts } from "../../asyncMock";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom'
const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getProducts().then(products => {
            setProducts(products)
        }).finally(() => {
                setLoading(false)
            }
        )
    }, [])

    if (loading)
    {
        return (
            <section class="py-5">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <h5 className="text-dark display-4 fw-bolder">loading...</h5>
                    </div>
                </div>
            </section>
        )

    }
    else
    {
        return (
            <section class="py-5">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row row-cols row-cols-12 justify-content-center">
                        <h2 className="justify-content-center">{greetings}</h2>
                    </div>
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {products.map( product => (
                            <div class="col mb-5">
                                <div className="card h-100">
                                    <img width="450" height="300px" className="card-img-top" src={product.img} alt={product.name} />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{product?.name}</h5>
                                            ${product?.price}
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">
                                            <Link to={`/product/${product.id}`} className="btn btn-outline-dark mt-auto">Ver</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
  }

export default ItemListContainer;


