import { useState, useEffect} from "react"
import { getProduct } from "../../asyncMock";
const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        getProduct('1').then(product => {
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    if (loading)
    {
        return (
            <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols justify-content-center">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="text-center text-white">
                            <h2 className="text-dark display-4 fw-bolder">Loading</h2>

                        </div>
                    </div>
                </div>
            </div>
            </section>
        );
    }
    return (
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols justify-content-center">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h2 className="text-dark display-4 fw-bolder">{product?.name}</h2>
                        <p>Descripción {product?.description}</p>
                        <p className="text-dark display-4 fw-bolder">Precio: {product?.price}</p>
                        <p className="text-dark display-4 fw-bolder">Stock: {product?.stock}</p>

                    </div>
                </div>
            </div>
        </div>
        </section>
    );
  }

export default ItemDetailContainer;


