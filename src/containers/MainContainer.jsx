import React from 'react'
import { Greetings } from '../components/body/Greetings/Greetings'
import { Header } from '../components/Header/Header'

/* Контейнер работы с карточками автомобиля */
export const MainContainer = () => {
  return (
    <>
      <Header />
      <Greetings />
    </>
  )
}
