import React from 'react';
import { useSelector} from 'react-redux';
import { ProductSelector } from '../../redux/moneySlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Styles from './styles.module.css';

function Product() {
    const productList = useSelector(ProductSelector);


    const list = productList.map((item) => {
        return (
                  <Card key={item.id}className={`${Styles.card} col-xl-4`}>
                      <Card.Img className='w-50' variant="top" src={item.img} />
                      <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>{item.price}</Card.Text>
                          <div className='row'>
                          <Button className='col-xl-4' variant="danger">Sell</Button>
                          <input value={item.quantity} className='col-xl-4 text-center' type="number" />
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
