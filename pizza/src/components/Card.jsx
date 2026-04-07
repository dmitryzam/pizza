function Card(props){

    return (
        <div className="card">
            <h2>{props.product.title}</h2>
            <p>{props.product.description}</p>
            <div>{props.product.price} руб.</div>
        </div>
    )
}

export default Card;