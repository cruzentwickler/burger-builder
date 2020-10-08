import React, { Component } from 'react'
import SideDraw from '../Navigation/SideDraw/SideDraw'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import styles from './Layout.module.css'

class Layout extends Component {
  state = {
    showSideDrawer: true,
  }

  SideDrawClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  render() {
    return (
      <>
        <Toolbar />
        <SideDraw
          open={this.state.showSideDrawer}
          closed={this.SideDrawClosedHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </>
    )
  }
}

export default Layout
