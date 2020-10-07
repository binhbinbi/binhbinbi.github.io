
export default ({ product }: any) => (
    <div className="product-item">
        <div className="image" style={{ backgroundImage: `url(${product.image})` }} />
        <div>{product.name}</div>
        <div>{product.price}VND</div>
    </div>
);
