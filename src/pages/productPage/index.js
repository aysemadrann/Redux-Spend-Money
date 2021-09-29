import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductSelector, handleChange, increment } from '../../redux/moneySlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Styles from './styles.module.css';


function Product() {
    const productList = useSelector(ProductSelector);
    const dispatch = useDispatch();

    const handleIncrement = (id) => {
        dispatch(increment(id));

    };
    
    const list = productList.map((item) => {
        return (
                  <Card key={item.id}className={`${Styles.card} col-xl-4`}>
                      <Card.Img className='w-50' variant="top" src={item.img} />
                      <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>{item.price}</Card.Text>
                          <div className='row'>
                          <Button onClick={() => handleIncrement(item.id)} className='col-xl-4' variant="danger">Sell</Button>
                            <input className='col-xl-4 text-center'value={item.quantity} type="number" />
                          <Button className='col-xl-4' variant="success">Buy</Button>
                          </div>
                      </Card.Body>
                  </Card>)
    });
   return <div className='container'>
            <div className='row '>{list}</div>
          </div>
};

export default Product;
