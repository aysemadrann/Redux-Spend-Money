import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ProductSelector } from '../../redux/moneySlice';
import Styles from './styles.module.css';

function Basket() {

    const ProductList = useSelector(ProductSelector);

    return (
        <div className='container'>
            <h2 className='text-center mt-3'>Basket</h2>
            {
                ProductList.map((item) => 
                <div className={item.quantity > 0 ? Styles.block : Styles.none}>
                    <Table striped bordered hover >
                    <thead >
                        <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{item.quantity > 0 ? item.title : ''}</td>
                        <td>{item.quantity > 0 ? item.quantity : ''}</td>
                        <td>{item.quantity > 0 ? item.price * item.quantity : ''}</td>
                        </tr>
                    </tbody>
                </Table>
                </div>
               
)
            }
        </div>
    )
}

export default Basket;