import React from 'react'
import './Menu.scss'
import { Food } from './Food'
import { Drink } from './Drink'
import { Desert } from './Desert'
import { Footer } from './Footer'

export const Menu = () => {
  return (
    <div>
        <h1>Menu</h1> 
        <Food></Food>
        <Drink></Drink>
        <Desert></Desert>
        <Footer></Footer>
    </div>
  )
}
