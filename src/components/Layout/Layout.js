import React from 'react'
import SideDraw from '../Navigation/SideDraw/SideDraw'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import styles from './Layout.module.css'

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <SideDraw />
      <main className={styles.Content}>{props.children}</main>
    </>
  )
}

export default Layout
