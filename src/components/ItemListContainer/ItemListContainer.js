import { getProducts } from "../../asyncMock";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom'
import ItemCard from "../ItemCard/ItemCard.js";
const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        getProducts(categoryId).then(products => {
            setProducts(products)
        }).finally(() => {
                setLoading(false)
            }
        )
    }, [categoryId])

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
                            <ItemCard product={product} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
  }

export default ItemListContainer


