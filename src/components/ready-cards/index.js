import React from 'react';
import {catalogList} from '../constants/productContainers'
import {ReadyCartCatalogItem} from '../ready-cart-category-name'
import styles from './index.module.sass'
import next_icon from '../../assets/images/next_icon.svg'
import { Button } from '../ready-baskets-button'
import { ReadyBasket } from './components/ready-baskets-container';

export const ReadyCards = () => {
    return (
        <div className={styles.container}>
            <ReadyBasket/>
            <div className={styles.titleCont}>
                <div className={styles.title}>Корзина для плова</div>
                <img className={styles.nextIcon} alt='Icon_next' src={next_icon}/>
            </div>
            <div className={styles.catalogListCont}>
                {catalogList.map((item) => {
                    return(
                        <ReadyCartCatalogItem
                            image ={item.image}
                            title = {item.title}
                        />
                    )
                })}
            </div>
            <div className={styles.products}>Всего : 14 продуктов</div>
            <div className={styles.allprice}>Общая сумма : 150.000 Сум </div>
            <div className={styles.buttonCont}>
                <div className={styles.buttonContItem}>
                    <Button color="blue">Оформить заказ</Button>
                </div>
                <div className={styles.buttonContItem}>
                    <Button color="orange">В корзину</Button>
                </div>
            </div>
        </div>
    );
}

