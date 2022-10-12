import React from 'react'
import classes from './Greetings.module.css'
import vectorImg from '../../../img/vectorImg.svg'
import mainImg from '../../../img/sigmaMale.png'

export const Greetings = () => {
  return (
    <div className={classes.greetings__body}>
      <div className={classes.greetings__wrapper}>
        <div className={classes.vectorImg__wrapper}>
          <img
            className={classes.vectorImg}
            src={vectorImg}
            alt='Sigma Male'
          />
        </div>
        <div className={classes.mainImg}>
          <div className={classes.mainImg__wrapper}>
            <img
              className={classes.mainImg}
              src={mainImg}
              alt='Sigma Male'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
