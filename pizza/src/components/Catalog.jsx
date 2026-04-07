import Card from "./Card";

function Catalog(props){
    return (
        <div className="catalog">
            <div className="catalog__filters">

            </div>
            <div className="catalog__body">
                <div className="catalog__options">

                </div>
                <div className="catalog__list">
                    {props.list.map((product) => <Card product={product} />)}
                </div>
            </div>
        </div>
    )
}

export default Catalog;