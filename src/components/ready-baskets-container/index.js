import React from 'react';
import { ReadyCards } from '../ready-cards';
import styles from './index.module.sass'

export const ReadtBasket = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <ReadyCards/>
            </div>
            <div className={styles.item}>
                <ReadyCards/>
            </div>
            <div className={styles.item}>
                <ReadyCards/>
            </div>
            <div className={styles.item}>
                <ReadyCards/>
            </div>
            <div className={styles.item}>
                <ReadyCards/>
            </div>
            
        </div>
    );
}

