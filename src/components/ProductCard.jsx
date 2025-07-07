function ProductCard({product}){

    function onFavoriteClick(){
        alert("Clicked")
    }

    return (
        <div className="product-card">
            <div className="product-poster">
                <img src={product.image} alt={product.title} />
                <div className="product-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default ProductCard