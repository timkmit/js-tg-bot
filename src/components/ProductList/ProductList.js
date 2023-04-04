import React, { useState } from 'react'
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem'
import { useTelegram } from '../../hooks/useTelegram';

const products = [
    {id: '1', title: 'Jeans', price: 5000, desctription: 'Blue color, straight'},
    {id: '2', title: 'Jeans', price: 7000, desctription: 'White color, straight'},
    {id: '3', title: 'Jeans', price: 2900, desctription: 'Green color, straight'},
    {id: '4', title: 'Jeans', price: 4500, desctription: 'Black color, straight'},
    {id: '5', title: 'Jacket', price: 10000, desctription: 'Orange color, straight'},
    {id: '6', title: 'Jacket', price: 9400, desctription: 'Grey color, straight'},
    {id: '7', title: 'Hat', price: 500, desctription: 'Blue color'},
    {id: '8', title: 'Hat', price: 600, desctription: 'Black color'},
    {id: '9', title: 'Hat', price: 600, desctription: 'White color'},
    {id: '10', title: 'Hat', price: 300, desctription: 'Orange color'},

]


const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price;
    }, 0)
}

export default function ProductList() {

    const [addedItems, setAddedItems] = useState();
    const {tg} = useTelegram();

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded){
            newItems = addedItems.filter(item => item.id !== product.id)
        }else{
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if(newItems.length === 0){
            tg.MainButton.hide();
        }else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`,
            })
        }
    }

  return (
    <div className={'list'}>
        {products.map(item => (
            <ProductItem
            product={item}
            onAdd={onAdd}
            className={'item '}
            />
        ))}
    </div>
  )
}
