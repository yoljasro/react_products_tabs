import React from 'react';
// import circle from '../../assets/images/Ellipse 274.png'
import styles from './index.module.sass'

export const ReadyCartCatalogItem = (props) => {
    return (
        <div className={styles.productContainer}>
            <img
                alt='strawberry'
                src={props.image} 
            />
            <div className={styles.productText}>{props.title}</div>
        </div>
    );
}


