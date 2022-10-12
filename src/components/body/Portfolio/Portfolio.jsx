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
          <div className={classes.portfolio__text_wrapper}>
            <div className={classes.portfolio__text}>
              <span className={classes.span__text}>
                fasion
              </span>
            </div>
            <div className={classes.portfolio__text}>
              <span className={classes.span__text}>
                reportage
              </span>
            </div>
            <div className={classes.portfolio__text}>
              <span className={classes.span__text}>
                portrait
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
