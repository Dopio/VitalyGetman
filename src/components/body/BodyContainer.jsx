import React from 'react'
import classes from './BodyContainer.module.css'
import { Greetings } from './Greetings/Greetings'
import { Portfolio } from './Portfolio/Portfolio'

export const BodyContainer = () => {
  return (<>
    <Greetings />
    <div className={classes.body__container}>
      <Portfolio />
    </div>
  </>)
}
