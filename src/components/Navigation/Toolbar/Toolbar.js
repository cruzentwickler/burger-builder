import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import styles from './Toolbar.module.css'

const Toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar
