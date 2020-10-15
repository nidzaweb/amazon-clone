import React from 'react'
import './item.css'
import { useStateContext } from '../../context'



function Item({ spec }) {

    const [{ basket }, dispatch] = useStateContext();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: spec.id,
                description: spec.description,
                cost: spec.cost,
                rating: spec.rating,
                img: spec.img,
            },
        });
    }

    const trimDescription = (desc) => {
        const words = 70;
        if (desc) {
            return desc.length > words ? desc.substring(0, words) + '...' : desc;
        }
    };


    return (
        <div className="item__card">
            <div className="item__info">
                <p>{trimDescription(spec.description)}</p>
                <span>$<strong>{spec.cost}</strong></span>
                <span className="item__rating">
                    {
                        Array(5).fill().map((_, index) => {

                            if (index < spec.rating) {
                                return <i className="fas fa-star"></i>;
                            } else {
                                return <i className="far fa-star"></i>;
                            }
                        })
                    }
                </span>
            </div>

            <div className="item__img">
                <img src={spec.img} alt="item_img" />
            </div>

            <div className="item__button">
                <button onClick={addToBasket}>Add to basket</button>
            </div>
        </div>
    )
}

export default Item
