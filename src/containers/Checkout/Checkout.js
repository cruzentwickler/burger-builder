import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary.js/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
// * Redux
import { connect } from 'react-redux'

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack()
  }

  checkoutContiuedHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }

  render() {
    return (
      <>
        <CheckoutSummary
          ingredients={this.props.ings}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContiued={this.checkoutContiuedHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          component={ContactData}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
  }
}

export default connect(mapStateToProps)(Checkout)
