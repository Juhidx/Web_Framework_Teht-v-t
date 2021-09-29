import styles from './ShippingOffer.module.css';
import React from 'react';

export default function ShippingOffer(props) {
    return (
        <div className={styles.container}>
            <div>
                Get it as soon as <span className={styles.offerDate}>{props.date}</span>
            </div>
            <div>
                $<span>{props.price}</span> shipping
            </div>
        </div>
    )
}
