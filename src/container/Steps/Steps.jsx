import React from 'react';
import './Steps.css';
const Steps = () => {
  return (
    <section className='steps section container'>
        <div className='steps__bg'>
            <h2 className='section__title-center steps__title'>
                Ex labore do commodo duis anim cupidatat mollit irure anim magna.
            </h2>
            <div className='steps__container grid'>
                <div className='steps__card'>
                    <div className='steps__card-number'>01</div>
                    <h3 className='steps__card-title'>Est tempor ex ipsum </h3>
                    <p className='steps__card-description'>Dolore dolore non fugiat elit consequat et </p>
                </div>
                <div className='steps__card'>
                    <div className='steps__card-number'>02</div>
                    <h3 className='steps__card-title'>Est tempor ex ipsum </h3>
                    <p className='steps__card-description'>Dolore dolore non fugiat elit consequat et </p>
                </div>
                <div className='steps__card'>
                    <div className='steps__card-number'>03</div>
                    <h3 className='steps__card-title'>Est tempor ex ipsum </h3>
                    <p className='steps__card-description'>Dolore dolore non fugiat elit consequat et </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Steps