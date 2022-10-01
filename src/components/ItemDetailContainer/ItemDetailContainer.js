import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount.js"
const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams();
    console.log(productId)
    console.log('loading', loading)
    useEffect(() => {
        return () => {
            fetch(`https://www.omdbapi.com/?i=${productId}&apikey=3bcc15cb`)
            .then(response => {
                return response.json()
            })
            .then(res => {
                console.log("RES", res)
                setProduct(res)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
            })
        }
    }, [productId])
    if (!loading)
    {
        return (
            <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols justify-content-center">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="text-center text-white">
                            <h2 className="text-dark display-4 fw-bolder">
                                <p>Titulo: {product?.Title}</p>
                                <p>Year: {product?.Year}</p>
                                <p>{product?.Plot}</p>
                                <img alt="" src={product?.Poster} />
                            </h2>
                                <ItemCount />
                        </div>
                    </div>
                </div>
            </div>
            </section>
        );
    }
    else
    {
        return (
            <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols justify-content-center">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="text-center text-white">
                            <h2 className="text-dark display-4 fw-bolder">
                                Loading...
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        );
    }
  }

export default ItemDetailContainer;


