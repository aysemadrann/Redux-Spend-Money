import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductList, Number, increment, decrement } from '../../redux/productSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Styles from './styles.module.css';

function Product() {
    const productList = useSelector(ProductList);
    const NumberValue = useSelector(Number);
    const dispatch = useDispatch();


    const list = productList.map((item) => {
        return (
            
                   
                  <Card key={item.id}className={`${Styles.card} col-xl-4`}>
                      <Card.Img className='w-50' variant="top" src={item.img} />
                      <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>{item.price}</Card.Text>
                          <div className='row'>
                          <Button onClick={(id) => dispatch(decrement(item.id))} className='col-xl-4' variant="danger">Sell</Button>
                          <input onChange={(e) => e.target.value} value={NumberValue} className='col-xl-4 text-center' type="number" />
                          <Button onClick={() => dispatch(increment(item.id))} className='col-xl-4' variant="success">Buy</Button>
                          </div>
                      </Card.Body>
                  </Card>)
              
          
      

    });
   return <div className='container'>
    <div className='row '>
{list}</div></div>
};


export default Product;
