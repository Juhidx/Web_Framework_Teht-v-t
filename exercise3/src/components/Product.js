import styles from './Product.module.css';
import React from 'react';
import ShippingOffer from './ShippingOffer.js';
import MoreChoises from './MoreChoises.js';
import Price from './Price.js'
import Certified from './Certified.js';

export default function Product(props) {
    return (
        <div className = {styles.container}>
            <div>
                <div className = {styles.header}>
                    <div>
                        {props.data.BestSeller ? 
                            <img className = {styles.bestSeller} src={props.bestSellerIMG} alt="Best seller missing!"/> 
                                : null}
                    </div>
                    <div className = {styles.imageContainer}>
                        <img className = {styles.img} src={props.data.IMG} alt="No memes here!"/>
                    </div>
                    <div className = {styles.productinfo}>
                        {props.data.Info}
                    </div>
                </div>
                <div className = {styles.rating}>
                    <img className = {styles.ratingIMG} src={props.data.RatingIMG} alt="No review here!"/> 
                    <div> {new Intl.NumberFormat('ja-JP').format(props.data.RatingCount)} </div>               
                </div>
                <div className={styles.price}>
                    {props.data.Price ? <Price price = {props.data.Price} offer = {props.data.OfferPrice}/> : null}
                </div>
                <div>
                    {props.data.ShippingPrice ? <ShippingOffer date = {props.data.ShippingDate} price = {props.data.ShippingPrice}/> : null}
                </div>
                <div>
                    {props.data.UsedNewCount ? <MoreChoises price = {props.data.MoreChoicesPrice} count = {props.data.UsedNewCount}/> : null}
                </div>
                <div>
                    {props.data.AmazonCertified ? <Certified/> : null}
                </div>
            </div>
        </div>
    )

}
