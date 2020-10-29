import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'
import styles from './SideDraw.module.css'

const SideDraw = (props) => {
  let attachedClasses = [styles.SideDraw, styles.Close]
  if (props.open) {
    attachedClasses = [styles.SideDraw, styles.Open]
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </>
  )
}

export default SideDraw
