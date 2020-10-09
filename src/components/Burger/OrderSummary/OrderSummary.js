import React, { Component } from 'react'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log('[Order Summery will update]')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
            {this.props.ingredients[igKey]}
          </li>
        )
      }
    )
    return (
      <>
        <h3>Your Order</h3>
        <p>A deliciuos burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to Checkout?</p>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>{' '}
        </p>
        <Button clicked={this.props.purchaseCancelled} btnType="Danger">
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </>
    )
  }
}

export default OrderSummary
