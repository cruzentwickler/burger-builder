import React, { useEffect } from 'react'
// * Router
import { Redirect } from 'react-router-dom'
// * Redux
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/index'

const Logout = (props) => {
  const { onLogout } = props

  useEffect(() => {
    onLogout()
  }, [onLogout])

  return <Redirect to="/" />
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(actions.logout()),
  }
}

export default connect(null, mapDispatchToProps)(Logout)
