import React from 'react'
import classes from './Portfolio.module.css'
import girl_1 from '../../../img/girl1.png'
import girl_2 from '../../../img/girl2.png'
import girl_3 from '../../../img/girl3.png'

export const Portfolio = () => {
  return (
    <div className={classes.portfolio__body}>
      <div className={classes.portfolio__wrapper}>
        <div className='title'>
          portfolio
        </div>
        <div className={classes.portfolio__content}>
          <div className={classes.portfolio__photos}>
            <img
              className={classes.vectorImg}
              src={girl_1}
              alt='girl_1'
            />
            <img
              className={classes.vectorImg}
              src={girl_2}
              alt='girl_2'
            />
            <img
              className={classes.vectorImg}
              src={girl_3}
              alt='girl_3'
            />
          </div>
          <div className={classes.portfolio__text}>
            <div className={classes.portfolio__text_title}>
              fasion
            </div>
            <div className={classes.portfolio__text_subtitle}>
              reportage<br /><br />portrait
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
