import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import './Questions.css';

const Questions = () => {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleOpen = (index) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter(i => i !== index));
        } else {
            setOpenIndexes([...openIndexes, index]);
        }
    };

    const questions = [
        "Excepteur id consequat aliquip laboris ?",
        "Excepteur id consequat aliquip laboris ?",
        "Excepteur id consequat aliquip laboris ?",
    ];

    return (
        <section className='questions section' id='faqs'>
            <h2 className='section__title-center question__title container'>
                Some common questions<br/>Were often asked
            </h2>
            <div className='questions__container container grid'>
                <div className='questions__group'>
                    {questions.map((question, index) => (
                        <div className='questions__item' onClick={() => toggleOpen(index)} key={index}>
                            <header className='questions__header'>
                                <i className={`questions__icon ${openIndexes.includes(index) ? 'questions__icon-open' : ''}`}><IoIosArrowDown size={22}/></i>
                                <h3 className='questions__item-title'>{question}</h3>
                            </header>
                            <div className={`questions__content ${openIndexes.includes(index) ? 'questions__open' : ''}`}>
                                <p className='questions__description'>
                                    Minim irure mollit pariatur tempor mollit.Adipisicing consectetur ullamco sit amet sit ad aliqua occaecat tempor nulla sunt.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Questions;
