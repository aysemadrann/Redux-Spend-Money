import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { ProductSelector, showTotalAmount, totalAmountSelector, } from '../../redux/moneySlice';
import Styles from './styles.module.css';

function Basket() {

    const ProductList = useSelector(ProductSelector);
    const totalAmount = useSelector(totalAmountSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showTotalAmount());
      }, [ProductList, dispatch]);

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
            <p>{totalAmount}</p>
        </div>
    )
}

export default Basket;