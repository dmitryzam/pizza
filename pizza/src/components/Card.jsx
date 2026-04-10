import defaultImage from '../assets/img/d.png';


function Card(props){

    return (
        <div className="card">
            <img className='card__image' src={defaultImage}/>
            <h2 className='card__title'>{props.product.title}</h2>
            <div className='card__info'>
                <span>{props.product.weight} г. </span>
                <span>{props.product.size_cm} см.</span>
            </div>
            <div className="card__price">Цена: {props.product.price} руб.</div>
            <div onClick={() => props.openModal(props.product.id)} className="btn">Подробнее</div>
        </div>
    )
}

export default Card;