import React from 'react'
import './BasketItem.css'
import { useStateContext } from '../../context'

function BasketItem({ spec }) {

    const [{ basket }, dispatch] = useStateContext();

    const removeFromBasket = () => {

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: spec.id,
            },
        });

    };



    return (
        <div className="basketItem">
            <img src={spec.img} alt="cart_image" />
            <div className="basketItem__details">
                <div>
                    <h3>{spec.description}</h3>
                    {
                        Array(5).fill().map((_, index) => (
                            spec.rating > index
                                ? <i className="fas fa-star"></i>
                                : <i className="far fa-star"></i>
                        ))
                    }
                </div>
                <div>
                    <button onClick={removeFromBasket}>Remove from basket</button>
                </div>
            </div>
        </div>
    )
}

export default BasketItem
