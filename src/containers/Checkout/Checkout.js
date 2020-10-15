import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary.js/CheckoutSummary'

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  }

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
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContiued={this.checkoutContiuedHandler}
        />
      </>
    )
  }
}

export default Checkout
