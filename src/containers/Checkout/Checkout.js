import React from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary.js/CheckoutSummary'
import { Route, Redirect } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
// * Redux
import { connect } from 'react-redux'

const Checkout = (props) => {
  const checkoutCancelledHandler = () => {
    props.history.goBack()
  }

  const checkoutContiuedHandler = () => {
    props.history.replace('/checkout/contact-data')
  }

  let summary = <Redirect to="/" />
  if (props.ings) {
    const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null

    summary = (
      <>
        {purchasedRedirect}
        <CheckoutSummary
          ingredients={props.ings}
          checkoutCancelled={checkoutCancelledHandler}
          checkoutContiued={checkoutContiuedHandler}
        />
        <Route
          path={props.match.path + '/contact-data'}
          component={ContactData}
        />
      </>
    )
  }
  return summary
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  }
}

export default connect(mapStateToProps)(Checkout)
