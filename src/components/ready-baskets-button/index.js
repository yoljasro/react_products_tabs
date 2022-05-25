import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.sass'



export const Button = ({color, children}) => {


    return (
        <div className = {
            color === 'orange' 
            ? styles.orangeBackground 
            : styles.blueBackground 
            }
        >
            {children}        
        </div>
    );
};



// Button.propTypes = {
//     color: PropTypes.string.isRequired,
//     child: PropTypes.string.isRequired
// };
