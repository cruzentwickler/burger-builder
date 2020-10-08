import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'
import NavigationItems from '../NavigationItems/NavigationItems'
import styles from './SideDraw.module.css'

const SideDraw = () => {
  return (
    <div className={styles.SideDraw}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default SideDraw
