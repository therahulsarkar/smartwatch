import React from 'react'
import NewLaunchImg from '../img/case.png'

function NewLaunch() {
    return (
        <section className="case section grid" id="case">
        <h2 className="section__title section__title-gradient">Case</h2>

        <div className="case__container container grid">
            <div>
                <img src={NewLaunchImg} alt="" className="case__img" />
            </div>

            <div className="case__data">
                <p className="case__description">With a comfortable and adaptable case so that you can 
                    store it whenever you want, and keep your durability forever.
                </p>
                <a className="button button--flex">
                    <i className="ri-information-line button__icon"></i> More info
                </a>
            </div>
        </div>
    </section>

    )
}

export default NewLaunch
