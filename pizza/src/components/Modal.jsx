import defaultImage from '../assets/img/d.png';

function Modal(props){

    return(
        <div className="modal">
            <div className="modal__header">
                <div onClick={props.closeModal} className="close-btn">&#10006;</div>
            </div>
            <div className="modal__body">
                <img className='modal__image' src={defaultImage}></img>
                <div className="modal__info">
                    <h2 className='modal__title'>{props.product.title}</h2>
                    <div className="modal__properties">
                        <span>Вес: {props.product.weight} г.</span>
                        <span>Диаметр: {props.product.size_cm} см.</span>
                        <span>Калорийность: {props.product.calories} ккал.</span>
                    </div>
                    <div className="modal__description">
                        {props.product.description}
                    </div>
                    <div className="modal__composition">
                        Состав: {props.product.composition}
                    </div>
                    <div className="modal__price">
                        Цена: {props.product.price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;