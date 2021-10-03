import styles from './MoreChoises.module.css';
import React from 'react';

export default function MoreChoises(props) {
    return (
        <div className={styles.container}>
            <div>
                More Buying Choices
            </div>
            <div className={styles.newUsedContainer}>
                 <span>${props.price}</span>
                 <div className={styles.usedNew}>({props.count} used & new offers)</div>
            </div>
        </div>
    )
}
