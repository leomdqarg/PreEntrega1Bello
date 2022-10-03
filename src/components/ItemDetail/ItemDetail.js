const ItemDetail = ({product}) => {
    return (
        <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={product?.img} alt={product?.name} /></div>
                <div className="col-md-6">
                    <div className="small mb-1">SKU: BST-{ product?.id }</div>
                    <h1 className="display-5 fw-bolder">{ product?.name }</h1>
                    <div className="fs-5 mb-5">
                        <span>${ product?.price }</span>
                    </div>
                    <p className="lead">{ product?.description }</p>
                </div>
            </div>
    )
}

export default ItemDetail