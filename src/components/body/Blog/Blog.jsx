import React from 'react'
import classes from './Blog.module.css'
import rowVector from '../../../img/rowVector.svg'
import blogphoto1 from '../../../img/blogphoto1.png'
import blogphoto2 from '../../../img/blogphoto2.png'

export const Blog = () => {
  return (
    <div className={classes.blog__body}>
      <div className={classes.blog__wrapper}>
        <div className={classes.blog__text__body}>
          <div className={classes.blog__text_title}>
            <div className='title'>blog</div>
            <div className={classes.blog__row_wrapper}>
              <img
                className={classes.vectorImg}
                src={rowVector}
                alt='row'
              />
            </div>
            <div className='title'>new</div>
          </div>
          <div className={classes.blog__text_wrapper}>
            <div className={classes.blog__text}>
              <span className={classes.span__text}>
                сколько вам нужно времени<br />для
                портретной фотосъемки?
              </span>
            </div>
            <div className={classes.blog__text}>
              <span className={classes.span__text}>
                fashion week saint-petersburg
                2020<br />
              </span>
            </div>
            <div className={classes.blog__text}>
              <span className={classes.span__text}>
                как выбрать фотостудию для<br />
                портретной съемки<br />
                самостоятельно?
              </span>
            </div>
          </div>


        </div>
        <div className={classes.blog__images}>
          <img
            className={classes.vectorImg__right}
            src={blogphoto1}
            alt='model_1'
          />
          <img
            className={classes.vectorImg__left}
            src={blogphoto2}
            alt='model_2'
          />
        </div>
      </div>
    </div >
  )
}
