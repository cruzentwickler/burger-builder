import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
// * Redux
import { connect } from 'react-redux'
import * as burgerBuilderActions from '../../store/actions/index'

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: false,
  }

  /* componentDidMount() {
    axios
      .get('/ingredients.json')
      .then((response) => {
        this.setState({ ingredients: response.data })
      })
      .catch((error) => {
        this.setState({ error: true })
      })
  } */

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey]
      })
      .reduce((sum, el) => {
        return sum + el
      }, 0)
    return sum > 0
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  pusrchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout')
  }

  render() {
    const disabledInfo = {
      ...this.props.ings,
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = null
    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    )

    if (this.props.ings) {
      burger = (
        <>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded} // *  I alrady passt the Ingredient in the child component, for that reason i dont convert the component in a arrow function
            ingredientRemove={this.props.onIngredientRemoved} // * I alrady passt the Ingredient in the child component, for that reason i dont convert the component in a arrow function
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
          />
        </>
      )

      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseCancelled={this.pusrchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={this.props.price}
        />
      )
    }

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.pusrchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch(burgerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) =>
      dispatch(burgerBuilderActions.removeIngredient(ingName)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios))
