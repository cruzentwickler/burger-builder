import React, { Component } from 'react'
import SideDraw from '../Navigation/SideDraw/SideDraw'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import styles from './Layout.module.css'

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      }
    })
  }

  render() {
    return (
      <>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDraw
          open={this.state.showSideDrawer}
          closed={this.sideDrawClosedHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </>
    )
  }
}

export default Layout
