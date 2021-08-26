import React from 'react'
import Product1 from '../img/product1.png'
import Product2 from '../img/product2.png'
import Product3 from '../img/product3.png'
import Product4 from '../img/product4.png'
import Product5 from '../img/product5.png'

function Products() {
    return (
        <section className="products section" id="products">
                <h2 className="section__title section__title-gradient products__line">
                    Choose  Your Style
                </h2>

                <div className="products__container container grid">

                    <article className="products__card">
                        <div className="products__content">
                            <img src={Product1} alt="" className="products__img" />
    
                            <h3 className="products__title">Black</h3>
                            <span className="products__price">$249</span>
    
                            <button className="button button--flex products__button">
                                <i className="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </article>

                    <article className="products__card">
                        <div className="products__content">
                            <img src={Product2} alt="" className="products__img"/>
    
                            <h3 className="products__title">Red Black</h3>
                            <span className="products__price">$249</span>
    
                            <button className="button button--flex products__button">
                                <i className="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </article>
                    <article className="products__card">
                        <div className="products__content">
                            <img src={Product3} alt="" className="products__img"/>
    
                            <h3 className="products__title">Night Black</h3>
                            <span className="products__price">$249</span>
    
                            <button className="button button--flex products__button">
                                <i className="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </article>
                    <article className="products__card">
                        <div className="products__content">
                            <img src={Product4} alt="" className="products__img"/>
    
                            <h3 className="products__title">Blue</h3>
                            <span className="products__price">$249</span>
    
                            <button className="button button--flex products__button">
                                <i className="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </article>

                    <article className="products__card">
                        <div className="products__content">
                            <img src={Product5} alt="" className="products__img"/>
    
                            <h3 className="products__title">Twilight gray</h3>
                            <span className="products__price">$249</span>
    
                            <button className="button button--flex products__button">
                                <i className="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </article>

                    <article className="products__card">
                        <div className="products__content">
                            <img src={Product1} alt="" className="products__img"/>
    
                            <h3 className="products__title">Twilight gray</h3>
                            <span className="products__price">$249</span>
    
                            <button className="button button--flex products__button">
                                <i className="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </article>
                </div>

            </section>
    )
}

export default Products
