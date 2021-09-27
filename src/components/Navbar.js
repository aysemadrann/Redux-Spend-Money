import React from 'react';
import Style from './styles.module.css';

function Navbar() {
    return (
        <div className={Style.navbar} >
            <img src='https://neal.fun/spend/billgates.jpg' alt="" />
            <h2>Spend Bill Gates' Money</h2>
        </div>
    )
}

export default Navbar;
