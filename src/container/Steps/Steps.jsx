import React from 'react';
import './Steps.css';
const Steps = () => {
  return (
    <section className='steps section container'>
        <div className='steps__bg'>
            <h2 className='section__title-center steps__title'>
                Elije tu planta en tres simples pasos.
            </h2>
            <div className='steps__container grid'>
                <div className='steps__card'>
                    <div className='steps__card-number'>01</div>
                    <h3 className='steps__card-title'>Segun tu espacio </h3>
                    <p className='steps__card-description'>Ten en cuenta el espacio disponible y la luz solar.</p>
                </div>
                <div className='steps__card'>
                    <div className='steps__card-number'>02</div>
                    <h3 className='steps__card-title'>Segun el tipo de planta</h3>
                    <p className='steps__card-description'>Cactus, de hoja verde, suculentas...</p>
                </div>
                <div className='steps__card'>
                    <div className='steps__card-number'>03</div>
                    <h3 className='steps__card-title'>Segun el cuidado</h3>
                    <p className='steps__card-description'>Si son de abundante riego o de areas abiertas.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Steps