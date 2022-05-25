import React from 'react';
import styles from './index.module.sass'
    
 export const ReadyCartTabs = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.item}>Все</div>
            <div className={styles.item}>Мои</div>
            <div className={styles.item}>Рекомендации</div>
        </div>
    );
}

