const ItemListContainer = ({greetings}) => {
    return (
        <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols justify-content-center">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h2 className="text-dark display-4 fw-bolder">{greetings}</h2>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
  }

export default ItemListContainer;


