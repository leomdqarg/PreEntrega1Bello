import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"

import { getProduct } from "../../asyncMock"
import ItemCount from "../ItemCount/ItemCount.js"

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
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={product?.img} alt={product?.name} /></div>
                <div className="col-md-6">
                    <div className="small mb-1">SKU: BST-{ product?.id }</div>
                    <h1 className="display-5 fw-bolder">{ product?.name }</h1>
                    <div className="fs-5 mb-5">
                        <span>${ product?.price }</span>
                    </div>
                    <p className="lead">{ product?.description }</p>
                    <div className="d-flex">
                        <ItemCount initial={2} stock={20} />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }

export default ItemDetailContainer;


