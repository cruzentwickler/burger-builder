import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'
import NavigationItems from '../NavigationItems/NavigationItems'
import styles from './SideDraw.module.css'

const SideDraw = () => {
  return (
    <div className={styles.SideDraw}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default SideDraw
