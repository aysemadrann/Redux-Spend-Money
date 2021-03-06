import React from 'react';
import Styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { moneyEndSelector } from '../../redux/moneySlice';



function Money() {
    const moneyValue = useSelector(moneyEndSelector);

    return (
        <div className={`${Styles.money__bg} text-center`}>
            <h1>$ {moneyValue} </h1>
        </div>
    )
}

export default Money;
