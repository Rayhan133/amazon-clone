import React from 'react'
import './Subtotal.css'
import {  useHistory} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {

const history =  useHistory(); 

    const [{ basket }] = useStateValue();
    return (
        <div className="subtotal">

            <p>
                Subtotal ({basket.length} items):
                            <strong>
                    ${getBasketTotal(basket)}
                </strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains gift box
                        </small>

            <button onClick={e => history.push('/payment')}>Process to Checkout</button>
        </div>
    )
}

export default Subtotal;
