import React from 'react'
import './basket.css'
import { useStateContext } from '../../context'
import BasketItem from './BasketItem'


function Basket() {

    const [{basket}, dispatch] = useStateContext();
    
    let total = basket.length > 0 && basket.reduce((total, item)=>total + item.cost, 0);

    return (
        <section className="basket">
            <div className="basket__header">
                <div className="basket__headerTitle">
                    <h1>Your Shopping Basket</h1>
                </div>

                <div className="basket__headerTotalSum">
                    <span>Subtotal({basket.length} items): <strong>$<code>{total ? total.toFixed(2) : 0}</code></strong></span>
                    <div className="basket__headerCheckBox">
                        <input type="checkbox" />
                        <span>This order contains a gift</span>
                    </div>
                    <button>Proceed to Chechout</button>
                </div>
            </div>

            <div className="basket__items">
                {
                basket.length === 0 
                ? <p>Your shopping basket is empty </p>
                : basket.map(item=>(
                        <BasketItem spec={item} />
                    ))
                }
            </div>

        </section>
    )
}

export default Basket
