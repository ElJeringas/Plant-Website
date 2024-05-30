import React from 'react'
import product_1 from '../../assets/images/product1.png';
import product_2 from '../../assets/images/product2.png'
import product_3 from '../../assets/images/product3.png'
import product_4 from '../../assets/images/product4.png'
import product_5 from '../../assets/images/product5.png'
import product_6 from '../../assets/images/product6.png'

import { RiShoppingBag4Fill } from "react-icons/ri";
import './Products.css'
const Products = () => {
  return (
    <section className='product section container' id='products'>
        <h2 className='section__title-center'>
            Check Our<br/>Products
        </h2>
        <p className='products__description'>
            Exercitation cillum ut ad ullamco elit.Do nisi cupidatat duis ut et voluptate eiusmod labore pariatur.
        </p>
        <div className='product__container grid'>
            <article className='product__card'>
                <div className='product__circle'/>
                <img src={product_1} alt='product' className='product__img'/>
                <h3 className='product__title'>Cacti Plant</h3>
                <span className='product__price'>$19.99</span>
                <button className='button-flex product__button'><RiShoppingBag4Fill size={25}/></button>
            </article>
            <article className='product__card'>
                <div className='product__circle'/>
                <img src={product_2} alt='product' className='product__img'/>
                <h3 className='product__title'>Cactus Plant</h3>
                <span className='product__price'>$11.99</span>
                <button className='button-flex product__button'><RiShoppingBag4Fill size={25}/></button>
            </article>
            <article className='product__card'>
                <div className='product__circle'/>
                <img src={product_3} alt='product' className='product__img'/>
                <h3 className='product__title'>Aloe Plant</h3>
                <span className='product__price'>$9.99</span>
                <button className='button-flex product__button'><RiShoppingBag4Fill size={25}/></button>
            </article>
            <article className='product__card'>
                <div className='product__circle'/>
                <img src={product_4} alt='product' className='product__img'/>
                <h3 className='product__title'>Cacti Plant</h3>
                <span className='product__price'>$19.99</span>
                <button className='button-flex product__button'><RiShoppingBag4Fill size={25}/></button>
            </article>
            <article className='product__card'>
                <div className='product__circle'/>
                <img src={product_5} alt='product' className='product__img'/>
                <h3 className='product__title'>Suculent Plant</h3>
                <span className='product__price'>$9.50</span>
                <button className='button-flex product__button'><RiShoppingBag4Fill size={25}/></button>
            </article>
            <article className='product__card'>
                <div className='product__circle'/>
                <img src={product_6} alt='product' className='product__img'/>
                <h3 className='product__title'> Green Plant</h3>
                <span className='product__price'>$7.50</span>
                <button className='button-flex product__button'><RiShoppingBag4Fill size={25}/></button>
            </article>
        </div>
    </section>
  )
}

export default Products