import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"

import { getProduct } from "../../asyncMock"
import ItemCount from "../ItemCount/ItemCount.js"
import ItemDetail from "../ItemDetail/ItemDetail.js"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProduct(productId).then(product => {
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])
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
            <div className="container px-4 px-lg-5 my-5">
                <div className="d-flex">
                    <ItemCount initial={2} stock={20} />
                </div>
                <ItemDetail product={product} />
            </div>
    </section>
    );
  }

export default ItemDetailContainer;


