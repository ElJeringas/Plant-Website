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
            Mira nuestros<br/>Productos
        </h2>
        <p className='products__description'>
            Tenemos toda una variedad para elegir.
        </p>
        <div className='product__container grid'>
            <article className='product__card'>
                <div className='product__circle'/>
                <img src={product_1} alt='product' className='product__img'/>
                <h3 className='product__title'>PLanta Cactus</h3>
                <span className='product__price'>$8.99</span>
                <button className='button-flex product__button'><RiShoppingBag4Fill size={25}/></button>
            </article>
            <article className='product__card'>
                <div className='product__circle'/>
                <img src={product_2} alt='product' className='product__img'/>
                <h3 className='product__title'>Cacti</h3>
                <span className='product__price'>$10.99</span>
                <button className='button-flex product__button'><RiShoppingBag4Fill size={25}/></button>
            </article>
            <article className='product__card'>
                <div className='product__circle'/>
                <img src={product_3} alt='product' className='product__img'/>
                <h3 className='product__title'>Aloe</h3>
                <span className='product__price'>$9.99</span>
                <button className='button-flex product__button'><RiShoppingBag4Fill size={25}/></button>
            </article>
            <article className='product__card'>
                <div className='product__circle'/>
                <img src={product_4} alt='product' className='product__img'/>
                <h3 className='product__title'>Suculenta</h3>
                <span className='product__price'>$9.99</span>
                <button className='button-flex product__button'><RiShoppingBag4Fill size={25}/></button>
            </article>
            <article className='product__card'>
                <div className='product__circle'/>
                <img src={product_5} alt='product' className='product__img'/>
                <h3 className='product__title'>Suculent Aloe</h3>
                <span className='product__price'>$9.50</span>
                <button className='button-flex product__button'><RiShoppingBag4Fill size={25}/></button>
            </article>
            <article className='product__card'>
                <div className='product__circle'/>
                <img src={product_6} alt='product' className='product__img'/>
                <h3 className='product__title'> De hoja</h3>
                <span className='product__price'>$7.50</span>
                <button className='button-flex product__button'><RiShoppingBag4Fill size={25}/></button>
            </article>
        </div>
    </section>
  )
}

export default Products