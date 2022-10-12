import React from 'react'
import classes from './Header.module.css'

export const Header = () => {
  return (
    <div className={classes.header__body}>
      <div className={classes.header__wrapper}>
        <text className={classes.header__text}>menu</text>
        <div className={classes.header__line}></div>
        <text className={classes.header__text}>Vitaliy Getman</text>
        <div className={classes.header__line}></div>
        <text className={classes.header__text}>contact</text>
      </div>
    </div>
  )
}
