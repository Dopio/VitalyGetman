import React from 'react'
import classes from './Layout.module.css'

/** Общий макет приложения */
export const Layout = ({ children }) => (
  <div className={classes.layout}>
    {children}
  </div>
)
