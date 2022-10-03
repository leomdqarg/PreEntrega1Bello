import { Link } from "react-router-dom"
const ItemCard = ({product}) => {
    return (
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
    )
}

export default ItemCard