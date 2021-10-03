import styles from './Certified.module.css'
import React from 'react';

export default function Certified() {
    return (
        <div className={styles.container}>
            <span className={styles.tag}>Amazon Certified: </span> Works with Alexa
        </div>
    )
}
