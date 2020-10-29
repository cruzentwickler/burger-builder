import React, { Component } from 'react'
import SideDraw from '../../components/Navigation/SideDraw/SideDraw'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import styles from './Layout.module.css'
// * Redux
import { connect } from 'react-redux'

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
        <Toolbar
          isAuth={this.props.isAuthenticated}
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
        <SideDraw
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawClosedHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

export default connect(mapStateToProps, null)(Layout)
