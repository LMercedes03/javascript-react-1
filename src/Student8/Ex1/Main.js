import React from 'react'
import { Header } from './Header'
import { Menu } from './Menu'
import './Main.scss'

export const Main = () => {
  return (
    <div className="Main">
        <Header />
        <Menu />
        {/* 
          <Menu />
          <Footer />
        */}
    </div>
  )
}
