import { getProducts } from "../../asyncMock";
import { useState,useEffect } from "react";
const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        getProducts().then(products => {
            setProducts(products)
        }).finally(
            setLoading(false)
        )
    }, [])
    if (loading)
    {
        return (
            <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols justify-content-center">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="text-center text-white">
                            <h2 className="text-dark display-4 fw-bolder">{greetings}</h2>
                                loading...
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )

    }
    return (
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols justify-content-center">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h2 className="text-dark display-4 fw-bolder">{greetings}</h2>

                        <ul>
                            {products.map( product => (
                                <div className="card h-100">
                                    <img className="card-img-top" src={product.img} alt={product.name} />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">{product?.name}</h5>
                                            {product?.price}
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/">Ver</a></div>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
  }

export default ItemListContainer;


